import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthFacade } from '../auth.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authFacade: AuthFacade) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
    this.authFacade.login({ username, password });
  }
}
