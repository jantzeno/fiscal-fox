import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  // TODO: Move mock test data to here from .ts file after wired to backend

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('may have budgets', () => {
    expect(component.budgets.length).toBeGreaterThanOrEqual(0);
  });

  it('should display available budget expenses', () => {
    const budgets = fixture.nativeElement.querySelectorAll(
      'app-budget-details'
    );
    expect(budgets.length).toBeGreaterThanOrEqual(0);
  });
});
