import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent],
  template: `
    <router-outlet />
    <h1>Curso de Angular</h1>
    <app-new-component />
  `
})
export class App {
  title = 'meu-primeiro-projeto-latest';
}
