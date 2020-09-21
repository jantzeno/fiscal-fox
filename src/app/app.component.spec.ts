import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { AppComponent } from './app.component';
import { MemoizedSelector } from '@ngrx/store';
import { AuthState } from './store/models/auth-state.model';
import { getIsAuth } from './store';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockStore: MockStore;
  let mockGetIsAuthSelector: MemoizedSelector<AuthState, boolean>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    mockStore = TestBed.inject(MockStore);
    mockGetIsAuthSelector = mockStore.overrideSelector(getIsAuth, false);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should should return false if the user is not logged in', (done) => {
    mockGetIsAuthSelector.setResult(false);
    mockStore.refreshState();
    fixture.detectChanges();
    component.isAuth$.subscribe((isAuth) => {
      expect(isAuth).toBeFalsy();
      done();
    });
  });

  it('should should return true if the user is not logged in', (done) => {
    mockGetIsAuthSelector.setResult(true);
    mockStore.refreshState();
    fixture.detectChanges();
    component.isAuth$.subscribe((isAuth) => {
      expect(isAuth).toBeTruthy();
      done();
    });
  });
});
