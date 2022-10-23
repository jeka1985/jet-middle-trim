import type {ClipboardEvent} from 'react';

export function splitString(input: string, tailSize: number) {
  return [input.slice(0, input.length - tailSize), input.slice(-tailSize)]
}

export function copyText(e: ClipboardEvent<HTMLDivElement>): void {
  const buffer: string[] = [];
	const selection = window.getSelection();
  
  e.preventDefault();

  if (selection) {
    for (let i = 0; i < selection.rangeCount; i++) {
      buffer.push(selection.getRangeAt(i).toString());
    }
    
    e.clipboardData?.setData('text/plain', buffer.join(''))
  }
}
