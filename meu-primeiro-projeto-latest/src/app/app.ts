import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateControlFlow } from './components/template/template-control-flow/template-control-flow';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateControlFlow],
  template: `
    <router-outlet />
    <h1>Curso de Angular</h1>
    <app-template-control-flow />
  `
})
export class App {
  title = 'meu-primeiro-projeto-latest';
}
