import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedIn } from './store';
import { AppState } from './store/application-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isAuth$: Observable<boolean>;

  constructor(private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.isAuth$ = this.store$.pipe(select(isLoggedIn));
  }
}
