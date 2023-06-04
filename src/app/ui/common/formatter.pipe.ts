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

const PATTERN_COMMAND = /\\(\w+)((?:\x03<(\d+)>(?:[^\x01\x02\x03\x04]*)\x04<\3>)*)((?:\x01<(\d+)>(?:[^\x01\x02\x03\x04]*)\x02<\5>)+)/gs;

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
    const processed = text.replace(
      PATTERN_COMMAND,
      (full: string, command: string, opts: string, optIndex: number, args: string, index: number) =>
        FormatterPipe.processCommand(full, command, FormatterPipe.split(opts), FormatterPipe.split(args))
    );
    if (processed !== text) {
      return this.processCommands(processed);
    }

    return text;
  }

  private static processCommand(full: string, command: string, opts: string[], args: string[]): string {
    const maker = COMMANDS.get(command);
    if (maker) {
      return maker(opts, args);
    }

    return `<span style="color: red">\\${command}${opts.length ? '[' + opts.join('][') + ']' : ''}{${
      args.length ? '{' + args.join('}{') + '}' : ''
    }}}</span>`;
  }

  private static split(text: string): string[] {
    if (text) {
      const parts = text.split(/[\x02\x04]<\d+>\s*/).map((p) => p.replace(/\s*[\x01\x03]<\d+>/, ''));
      // Remove the last element that is always empty.
      parts.pop();
      return parts;
    } else {
      return [];
    }
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

function div(text: string, className: string): string {
  return enclose('div', text, [['class', className]]);
}

function list(opts: string[], args: string[]): string {
  if (args.length) {
    return '<ul><li>' + args.join('</li><li>') + '</li></ul>';
  } else {
    return '';
  }
}

function table(opts: string[], args: string[]): string {
  const columns = opts.length;
  const header = '<tr><th><b>' + opts.join('</b></th><th><b>') + '</b></th></tr>';
  const rows: string[] = [];

  let row = '';
  for (let i = 0; i < args.length; i++) {
    row += enclose('td', args[i]);
    if (i % columns === columns - 1) {
      rows.push(row);
      row = '';
    }
  }

  return '<table class="format-table">' + header + '<tr>' + rows.join('</tr><tr>') + '</tr>';
}

function first(array?: string[]) {
  return array && array.length ? array[0] : '';
}

const COMMANDS = new Map<string, (optional: string[], argument: string[]) => string>();
COMMANDS.set('bold', (o, a) => enclose('b', first(a) || ''));
COMMANDS.set('em', (o, a) => enclose('i', first(a) || ''));
COMMANDS.set('sub', (o, a) => enclose('i', enclose('b', first(a) || '')));
COMMANDS.set('title', (o, a) => div(first(a) || '', 'format-title'));
COMMANDS.set('subtitle', (o, a) => div(first(a) || '', 'format-subtitle'));
COMMANDS.set('list', list);
COMMANDS.set('table', table);
COMMANDS.set('Monster', (o, a) =>
  enclose('dma-reference', first(a) || '', [
    ['name', first(o) || first(a) || ''],
    ['type', 'monster'],
  ])
);
COMMANDS.set('Item', (o, a) =>
  enclose('dma-reference', first(a) || '', [
    ['name', first(o) || first(a) || ''],
    ['type', 'item'],
  ])
);
COMMANDS.set('Spell', (o, a) =>
  enclose('dma-reference', first(a) || '', [
    ['name', first(o) || first(a) || ''],
    ['type', 'spell'],
  ])
);
COMMANDS.set('God', (o, a) =>
  enclose('dma-reference', first(a) || '', [
    ['name', first(o) || first(a) || ''],
    ['type', 'god'],
  ])
);
COMMANDS.set('Place', (o, a) =>
  enclose('dma-reference', first(a) || '', [
    ['name', first(o) || first(a) || ''],
    ['type', 'place'],
  ])
);
COMMANDS.set('NPC', (o, a) =>
  enclose('dma-reference', first(a) || '', [
    ['name', first(o) || first(a) || ''],
    ['type', 'npc'],
  ])
);
COMMANDS.set('Group', (o, a) =>
  enclose('dma-reference', first(a) || '', [
    ['name', first(o) || first(a) || ''],
    ['type', 'group'],
  ])
);
COMMANDS.set('Event', (o, a) =>
  enclose('dma-reference', first(a) || '', [
    ['name', first(o) || first(a) || ''],
    ['type', 'event'],
  ])
);
