import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveForms } from './components/forms/reactive-forms/reactive-forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveForms],
  template: `
    <router-outlet />
    <h1>Curso de Angular</h1>
    <app-reactive-forms />
  `
})

export class App {
  title = 'meu-primeiro-projeto-latest';
}
