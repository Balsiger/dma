import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

const COMMAND = '\\';

interface Brackets {
  markerStart: string;
  markerEnd: string;
  pattern: RegExp;
}

const BRACKETS = {
  markerStart: '\x01',
  markerEnd: '\x02',
  pattern: /\{([^\{\}]*?)\}/gs,
};

const OPTIONAL_BRACKETS = {
  markerStart: '\x03',
  markerEnd: '\x04',
  pattern: /\[([^\[\]]*?)\]/gs,
};

const PATTERN_COMMAND = /\\(\w+)s*(?:\x03<(\d+)>(.*?)\x04<\2>)?\s*\x01<(\d+)>(.*?)\x02<\4>/gs;

@Pipe({ name: 'format' })
export class FormatterPipe implements PipeTransform {
  constructor(private readonly sanitizer: DomSanitizer) {}

  transform(text: string): SafeHtml {
    // Replace newlines with <br>.
    let result = text.replace(/\n\n/g, '<div class="format-par"></div>');

    // Mark all brackets for easier processing later.
    result = FormatterPipe.markBrackets(result, BRACKETS);
    result = FormatterPipe.markBrackets(result, OPTIONAL_BRACKETS);

    // Process commands.
    result = FormatterPipe.processCommands(result);

    return this.sanitizer.bypassSecurityTrustHtml(result);
  }

  private static processCommands(text: string): string {
    const processed = text.replace(PATTERN_COMMAND, FormatterPipe.processCommand);
    if (processed !== text) {
      return this.processCommands(processed);
    }

    return text;
  }

  private static processCommand(
    full: string,
    command: string,
    optionalIndex: string,
    optional: string,
    index: number,
    argument: string
  ): string {
    const maker = COMMANDS.get(command);
    if (maker) {
      return maker(optional, argument);
    }

    return `<span style="color: red">\\${command}${optional ? '[' + optional + ']' : ''}{${argument}}</span>`;
  }

  private static markBrackets(text: string, brackets: Brackets, index = 0): string {
    const processed = text.replace(
      brackets.pattern,
      (_, t) => `${brackets.markerStart}<${index}>${t}${brackets.markerEnd}<${index}>`
    );

    if (text !== processed) {
      return FormatterPipe.markBrackets(processed, brackets, index + 1);
    }

    return text;
  }
}

function enclose(tag: string, text: string, attributes: [string, string][] = []): string {
  const attrs = attributes.map((a) => `${a[0]}="${a[1]}"`).join(' ');
  return `<${tag} ${attrs}>${text}</${tag}>`;
}

const COMMANDS = new Map<string, (optional: string, argument: string) => string>();
COMMANDS.set('bold', (o, a) => enclose('b', a));
COMMANDS.set('em', (o, a) => enclose('i', a));
COMMANDS.set('Monster', (o, a) =>
  enclose('dma-reference', a, [
    ['name', o || a],
    ['type', 'monster'],
  ])
);
