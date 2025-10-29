import { Component, signal } from '@angular/core';
import { InputComponent } from '../input/input';
import { OutputComponent } from '../output/output';

@Component({
  selector: 'app-pai-ou-mae',
  imports: [InputComponent, OutputComponent],
  templateUrl: './pai-ou-mae.html',
  styleUrl: './pai-ou-mae.scss',
})
export class PaiOuMae {
  public name = signal("Dados passados para o input..");

  public outputName = signal("Output sem valor");
}
