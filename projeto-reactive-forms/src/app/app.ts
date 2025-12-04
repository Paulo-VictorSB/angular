import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
  FormGroup
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

// --- Validators helpers ---

// Birthdate validator
function birthdateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;

    const date = new Date(value);
    const today = new Date();

    if (isNaN(date.getTime())) return { invalidDate: true };
    if (date > today) return { futureDate: true };

    return null;
  };
}

// CPF validator with checksum (Brazilian CPF)
function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const v = (control.value || '').toString().replace(/\D/g, '');
    if (!v) return null;
    if (v.length !== 11) return { cpfInvalid: true };

    if (/^(\d)\1+$/.test(v)) return { cpfInvalid: true };

    const calc = (digits: string) => {
      let sum = 0;
      for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits.charAt(i)) * ((digits.length + 1) - i);
      }
      const res = (sum * 10) % 11;
      return res === 10 ? 0 : res;
    };

    const d1 = calc(v.substring(0, 9));
    const d2 = calc(v.substring(0, 9) + d1);

    if (d1 !== parseInt(v.charAt(9)) || d2 !== parseInt(v.charAt(10))) {
      return { cpfInvalid: true };
    }

    return null;
  };
}

function matchValidator(field: string, matchingField: string, errorKey = 'mismatch'): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const g = group as FormGroup;
    const a = g.get(field)?.value;
    const b = g.get(matchingField)?.value;

    if (a == null || b == null) return null;
    return a === b ? null : { [errorKey]: true };
  };
}

function imageFileValidator(file: File | null, maxBytes = 2 * 1024 * 1024) {
  if (!file) return null;
  const allowed = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
  if (!allowed.includes(file.type)) {
    return { invalidType: true };
  }
  if (file.size > maxBytes) {
    return { maxSizeExceeded: { max: maxBytes } };
  }
  return null;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [provideNgxMask()]
})
export class App {
  #fb = inject(FormBuilder);

  public profileForm = this.#fb.group({
    personal: this.#fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      birthdate: ['', [Validators.required, birthdateValidator()]],
      cpf: ['', [Validators.required, cpfValidator()]],
      phone: ['', [Validators.required]],
      imageProfile: [null]
    }),
    adress: this.#fb.group({
      road: ['', Validators.required],
      number: ['', Validators.required],
      neighborhood: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', [Validators.required]],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]]
    }),
    login: this.#fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]]
      },
      { validators: [matchValidator('email', 'confirmEmail', 'emailMismatch'), matchValidator('password', 'confirmPassword', 'passwordMismatch')] }
    ),
    preferences: this.#fb.group({
      position: ['', Validators.required],
      status: ['', Validators.required],
      observations: ['', Validators.maxLength(500)]
    })
  });

  // --- getters for template ---
  get personal() {
    return this.profileForm.get('personal') as FormGroup;
  }
  get name() {
    return this.personal.get('name');
  }
  get birthdate() {
    return this.personal.get('birthdate');
  }
  get cpf() {
    return this.personal.get('cpf');
  }
  get phone() {
    return this.personal.get('phone');
  }
  get imageProfile() {
    return this.personal.get('imageProfile');
  }

  get adress() {
    return this.profileForm.get('adress') as FormGroup;
  }
  get road() {
    return this.adress.get('road');
  }
  get number() {
    return this.adress.get('number');
  }
  get neighborhood() {
    return this.adress.get('neighborhood');
  }
  get city() {
    return this.adress.get('city');
  }
  get state() {
    return this.adress.get('state');
  }
  get cep() {
    return this.adress.get('cep');
  }

  get login() {
    return this.profileForm.get('login') as FormGroup;
  }
  get email() {
    return this.login.get('email');
  }
  get confirmEmail() {
    return this.login.get('confirmEmail');
  }
  get password() {
    return this.login.get('password');
  }
  get confirmPassword() {
    return this.login.get('confirmPassword');
  }

  get preferences() {
    return this.profileForm.get('preferences') as FormGroup;
  }
  get position() {
    return this.preferences.get('position');
  }
  get status() {
    return this.preferences.get('status');
  }
  get observations() {
    return this.preferences.get('observations');
  }

  // --- Error getters ---
  get nameErrors() {
    return this.name?.errors;
  }
  get birthdateErrors() {
    return this.birthdate?.errors;
  }
  get cpfErrors() {
    return this.cpf?.errors;
  }
  get phoneErrors() {
    return this.phone?.errors;
  }
  get imageProfileErrors() {
    return this.imageProfile?.errors;
  }
  get roadErrors() {
    return this.road?.errors;
  }
  get numberErrors() {
    return this.number?.errors;
  }
  get neighborhoodErrors() {
    return this.neighborhood?.errors;
  }
  get cityErrors() {
    return this.city?.errors;
  }
  get stateErrors() {
    return this.state?.errors;
  }
  get cepErrors() {
    return this.cep?.errors;
  }
  get emailErrors() {
    return this.email?.errors;
  }
  get confirmEmailErrors() {
    return this.confirmEmail?.errors;
  }
  get passwordErrors() {
    return this.password?.errors;
  }
  get confirmPasswordErrors() {
    return this.confirmPassword?.errors;
  }
  get loginErrors() {
    return this.login?.errors;
  }
  get positionErrors() {
    return this.position?.errors;
  }
  get statusErrors() {
    return this.status?.errors;
  }
  get observationsErrors() {
    return this.observations?.errors;
  }

  // --- file change handler ---
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      this.imageProfile?.setValue(null);
      this.imageProfile?.setErrors(null);
      return;
    }
    const file = input.files[0];
    const errors = imageFileValidator(file, 2 * 1024 * 1024);
    if (errors) {
      this.imageProfile?.setErrors(errors);
      this.imageProfile?.setValue(null);
    } else {
      this.imageProfile?.setValue(file);
      this.imageProfile?.setErrors(null);
    }
    this.imageProfile?.markAsTouched();
  }

  public getErrorMessage(controlName: string, errorKey: string, data: any) {
    const messages: any = {
      required: 'Campo obrigatório.',
      minlength: `Mínimo de ${data?.requiredLength ?? data} caracteres.`,
      maxlength: `Máximo de ${data?.requiredLength ?? data} caracteres.`,
      email: 'O e-mail não é válido.',
      invalidDate: 'Data inválida.',
      futureDate: 'Data maior que a atual.',
      cpfInvalid: 'CPF inválido.',
      pattern: 'Formato inválido.',
      invalidType: 'Tipo de arquivo inválido (aceito: png, jpg, jpeg, webp).',
      maxSizeExceeded: `Arquivo muito grande (máx ${Math.round((data?.max ?? 0) / 1024 / 1024)} MB).`,
      emailMismatch: 'Os e-mails não conferem.',
      passwordMismatch: 'As senhas não conferem.',
      mismatch: 'Campos não conferem.'
    };

    return messages[errorKey] || 'Campo inválido.';
  }

  onSubmit() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }
    const payload = { ...this.profileForm.value };
    console.log('enviar payload', payload);
  }
}
