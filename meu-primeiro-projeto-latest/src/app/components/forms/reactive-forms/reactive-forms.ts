import { Component, inject, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.scss',
})
export class ReactiveForms {
  #fb = inject(FormBuilder);

  public profileForm = this.#fb.group({
    name: ['Paulo Victor'],
    myStacks: this.#fb.group({
      front: ['Angular'],
      back: ['Php']
    }),
    myFavoriteFoods: this.#fb.array([['X-Tudo']]),
  })

  public update()
  {
    this.profileForm.patchValue({
      name: "Paulo Victor Atualizado",
      myStacks: {
        front: "Angular Atualizado",
        back: "Php Atualizado"
      },
    })
  }

  public addMyFavoriteFoods(newFood: string) {
    const myFavoriteFoods = this.profileForm.get('myFavoriteFoods') as FormArray;
    const addNewFood = new FormControl(newFood);

    myFavoriteFoods.push(addNewFood);
  }
}
