import { Component, EventEmitter, Input, Output } from '@angular/core';

// interface
import { IListItems } from '../../interface/IListItems.interface';

@Component({
  selector: 'app-input-list-item',
  imports: [],
  templateUrl: './input-list-item.html',
  styleUrl: './input-list-item.scss',
})
export class InputListItem {
  @Input({ required: true }) public inputListItems: IListItems[] = [];

  @Output() public outputUpdateItemCheckbox = new EventEmitter<{
    id: string;
    checked: boolean;
  }>();
  public updateItemCheckbox(id: string, checked: boolean) {
    return this.outputUpdateItemCheckbox.emit({ id, checked })
  }

  @Output() public outputUpdateItemValue = new EventEmitter<{
    id: string;
    value: string;
  }>();
  public updateItemValue(id: string, value: string) {
    return this.outputUpdateItemValue.emit({ id, value })
  }

  @Output() public outputDeleteItem = new EventEmitter<string>();
  public deleteItem(id: string) {
    return this.outputDeleteItem.emit(id);
  }
}
