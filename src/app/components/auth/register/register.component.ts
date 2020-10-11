import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select } from '@ngrx/store';
import { User } from '../../user/store/models/user.model';
import { getIsRegistered } from '../store';
import { Observable } from 'rxjs';
import { FormHelper } from '../../helpers/form-helper';
import { AuthFacade } from '../auth.facade';

@Component({
  selector: 'app-register',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authFacade: AuthFacade) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          // Start and end with a letter or number
          // Characters can be seperated by one underscore, hyphen, or period
          Validators.pattern(FormHelper.usernamePattern),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]],
    });
  }

  // Validate Input
  checkValidInput(fieldName): boolean {
    return FormHelper.checkValidInput(this.registerForm, fieldName);
  }

  // Get form field errors
  getErrors(fieldName) {
    return FormHelper.getErrors(this.registerForm, fieldName);
  }

  // Submit Registration Request
  onSubmit() {
    const username = this.registerForm.get('username').value;
    const email = this.registerForm.get('email').value;
    const role = this.registerForm.get('role').value;
    const inputUser: User = { username, email, role };

    const password = this.registerForm.get('password').value;

    if (this.registerForm.valid) {
      this.authFacade.register(inputUser, password);
    }
  }
}
