import { Component, signal } from '@angular/core';
import { InputAddItem } from '../../components/input-add-item/input-add-item';
import { IListItems } from '../../interface/IListItems.interface';

@Component({
  selector: 'app-list',
  imports: [InputAddItem],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  public addItem = signal(true);

  #setListItems = signal<IListItems[]>(this.#parseItems());
  public getListItems = this.#setListItems.asReadonly();

  #parseItems(){
    return JSON.parse(localStorage.getItem('@my-list') || '[]');
  }

  public getInputAndAddItem(value: IListItems) {
    localStorage.setItem(
      '@my-list',
      JSON.stringify([...this.#setListItems(), value])
    );

    return this.#setListItems.set(this.#parseItems());
  }
}
