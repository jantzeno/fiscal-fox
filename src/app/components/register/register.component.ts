import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { User } from '../user/store/models/user.model';
import { ApplicationState } from 'src/app/store/models/application-state.model';
import { getIsRegistered, go, requestRegistration } from '../../store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isRegistered$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store<ApplicationState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          // Start and end with a letter or number
          // Characters can be seperated by one underscore, hyphen, or period
          Validators.pattern('^[a-zA-Z0-9]+(?:[-_.]?[a-zA-Z0-9])*$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]],
    });

    this.isRegistered$ = this.store.pipe(select(getIsRegistered));
  }

  // Validate Input
  checkValidInput(fieldName): boolean {
    return (
      this.registerForm.controls[fieldName].invalid &&
      (this.registerForm.controls[fieldName].dirty ||
        this.registerForm.controls[fieldName].touched)
    );
  }

  // Get form field errors
  getErrors(fieldName) {
    return this.registerForm.controls[fieldName].errors;
  }

  // Submit Registration Request
  onSubmit() {
    const username = this.registerForm.get('username').value;
    const email = this.registerForm.get('email').value;
    const role = this.registerForm.get('role').value;
    const inputUser: User = { username, email, role };

    const password = this.registerForm.get('password').value;

    console.log(inputUser);
    this.store.dispatch(requestRegistration({ user: inputUser, password }));
  }
}
