import { Directive, ElementRef } from '@angular/core';

export function capitalizeWords(value: string) {
  return value.toLowerCase().replace(/(?:^|\s)\S/g, (a) => {
    return a.toUpperCase();
  });
}
@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirective {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const text = this.el.nativeElement.innerText;
    const words = text.split(' ');

    const capitalizedWords = words.map((word: string) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    this.el.nativeElement.innerText = capitalizedWords.join(' ');
  }
}
