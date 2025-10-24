import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  imports: [],
  templateUrl: './template-binding.html',
  styleUrl: './template-binding.scss',
})
export class TemplateBinding {
  public name: string = "Paulo Victor";
  public age: number = 20;
  public isDisable: Boolean = true

  public sum(n1: number, n2:number) {
    return n1 + n2;
  }
}
