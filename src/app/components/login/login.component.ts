import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApplicationState } from 'src/app/store/models/application-state.model';
import { NavigationGo } from 'src/app/store/models/router.models';
import { getIsAuth, go, requestLogin } from '../../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<ApplicationState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
    this.store.dispatch(requestLogin({ username, password }));

    if (this.store.select(getIsAuth)) {
      this.store.dispatch(go({ path: ['dashboard'] }));
    }
  }

  onRegister() {
    // this.store.dispatch(go({ path: ['register'] }));
  }
}
