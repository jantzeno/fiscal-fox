import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/store/models/application-state.model';
import { requestLogin } from '../../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store$: Store<ApplicationState>
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    });
  }

  submit() {
    const { username, password } = this.loginForm.value;
    this.store$.dispatch(requestLogin({ username, password }));
  }
}
