import { Component, Input, signal } from '@angular/core';

function toUpperCase(value: string) {
  return value.toUpperCase();
}

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent {
  public Data = signal("No data");

  @Input({ transform: toUpperCase }) set InputData(value: string) { this.Data.set(value); }
}
