import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  #fb = inject(FormBuilder);

  public profileForm = this.#fb.group({
    personalData: this.#fb.group({
      name: [''],
      birthdate: [''],
      cpf: [''],
      phone: [''],
      imageProfile: ['']
    }),
    adress: this.#fb.group({
      road: [''],
      number: [''],
      neighborhood: [''],
      city: [''],
      state: [''],
      cep: ['']
    }),
    login: this.#fb.group({
      email: [''],
      confirmEmail: [''],
      password: [''],
      confirmPassword: ['']
    }),
    preferences: this.#fb.group({
      position: [''],
      status: [''],
      observations: ['']
    })
  })
}
