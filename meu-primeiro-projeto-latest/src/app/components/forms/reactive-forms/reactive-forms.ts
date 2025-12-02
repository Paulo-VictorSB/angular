import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
    })
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
}
