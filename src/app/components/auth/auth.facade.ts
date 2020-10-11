import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { ApplicationState } from '../../store/models/application-state.model';
import { User } from '../user/store/models/user.model';
import { requestLogin, requestLogout, requestRegistration } from './store';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  constructor(private store: Store<ApplicationState>) {}

  login({ username, password }) {
    if ({ username, password }) {
      this.store.dispatch(requestLogin({ username, password }));
    }
  }

  logout() {
    this.store.dispatch(requestLogout());
  }

  register(_user: User, password: string) {
    if (_user && password) {
      this.store.dispatch(requestRegistration({ user: _user, password }));
    }
  }
}
