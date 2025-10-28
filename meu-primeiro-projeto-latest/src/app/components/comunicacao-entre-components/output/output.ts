import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  imports: [],
  templateUrl: './output.html',
  styleUrl: './output.scss',
})
export class OutputComponent {
  @Output() public outputName = new EventEmitter<string>();

  public sendOutputName() {
    return this.outputName.emit("Paulo Victor")
  }
}
