import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateControlFlow } from './components/template/template-control-flow/template-control-flow';
import { TemplateDeferrableViews } from './components/template/template-deferrable-views/template-deferrable-views';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateDeferrableViews],
  template: `
    <router-outlet />
    <h1>Curso de Angular</h1>
    <app-template-deferrable-views />
  `
})
export class App {
  title = 'meu-primeiro-projeto-latest';
}
