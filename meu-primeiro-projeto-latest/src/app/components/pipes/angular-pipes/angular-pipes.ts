import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  imports: [CommonModule],
  templateUrl: './angular-pipes.html',
  styleUrl: './angular-pipes.scss',
})
export class AngularPipes {
  public date = signal(new Date());

  public json = signal([
    {name: "Paulo Victor"}
  ])
}
