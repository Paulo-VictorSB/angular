import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  imports: [],
  templateUrl: './template-variables.html',
  styleUrl: './template-variables.scss',
})
export class TemplateVariables implements AfterViewInit {
  @ViewChild('name') public nameInput!: ElementRef;

  ngAfterViewInit(): void { // lifecycle
    console.log(this.nameInput.nativeElement.value);
  }
}
