import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/application-state.model';
import { login } from 'src/app/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    });
  }

  submit() {
    console.log('Login submitted');
    this.store$.dispatch(login());
  }
}
