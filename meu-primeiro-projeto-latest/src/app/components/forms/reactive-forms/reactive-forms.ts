import { Component, signal } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.scss',
})
export class ReactiveForms {
  public profileForm = new FormGroup({
    name: new FormControl('Paulo Victor'),
    myStacks: new FormGroup({
      front: new FormControl('Angular'),
      back: new FormControl('Php')
    }),
    myFavoriteFoods: new FormArray([]),
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
