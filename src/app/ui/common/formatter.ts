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
export class Formatter implements PipeTransform {
  constructor(private readonly sanitizer: DomSanitizer) {}

  transform(text: string): SafeHtml {
    // Replace newlines with <br>.
    let result = text.replace(/\n\n/g, '<div class="format-par"></div>');

    // Mark all brackets for easier processing later.
    result = Formatter.markBrackets(result, BRACKETS);
    result = Formatter.markBrackets(result, OPTIONAL_BRACKETS);

    // Process commands.
    result = Formatter.processCommands(result);

    return this.sanitizer.bypassSecurityTrustHtml(result);
  }

  private static processCommands(text: string): string {
    const processed = text.replace(PATTERN_COMMAND, Formatter.processCommand);
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

    return `\\${command}[${optional}]{${argument}}`;
  }

  private static markBrackets(text: string, brackets: Brackets, index = 0): string {
    const processed = text.replace(
      brackets.pattern,
      (_, t) => `${brackets.markerStart}<${index}>${t}${brackets.markerEnd}<${index}>`
    );

    if (text !== processed) {
      return Formatter.markBrackets(processed, brackets, index + 1);
    }

    return text;
  }
}

function makeBold(optional: string, argument: string): string {
  return '<b>' + argument + '</b>';
}

const COMMANDS = new Map<string, (optional: string, argument: string) => string>();
COMMANDS.set('bold', makeBold);
