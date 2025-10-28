import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularPipes } from './components/pipes/angular-pipes/angular-pipes';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AngularPipes],
  template: `
    <router-outlet />
    <h1>Curso de Angular</h1>
    <app-angular-pipes/>
  `
})
export class App {
  title = 'meu-primeiro-projeto-latest';
}
