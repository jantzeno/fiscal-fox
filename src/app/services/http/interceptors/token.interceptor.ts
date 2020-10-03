import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../store/models/application-state.model';
import { getToken } from '../../../store';
import { first, flatMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private store: Store<ApplicationState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.store.select(getToken).pipe(
      first(),
      flatMap((token) => {
        const authReq = !!token
          ? req.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            })
          : req;
        return next.handle(authReq);
      })
    );
  }
}
