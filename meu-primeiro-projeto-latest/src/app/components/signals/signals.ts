import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class Signals {
  public firstName = signal("Paulo ");
  public lastName = signal("Barbosa");

  public fullName = computed(() => {  return this.firstName() + this.lastName(); })

  public array = signal([1]);

  constructor() {}

  public updateName() {
    return this.firstName.set("Victor ")
  }

  public updateArray() {
    this.array.update((oldValue: Array<number>) => {
      return [...oldValue, oldValue.length + 1];
    });
  }
}
