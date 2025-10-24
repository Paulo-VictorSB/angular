import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-template-control-flow',
  imports: [AsyncPipe],
  templateUrl: './template-control-flow.html',
  styleUrl: './template-control-flow.scss',
})
export class TemplateControlFlow {
  public isTrue: Boolean = true;

  public loadingData$: Observable<string[]> = of ([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000));
}
