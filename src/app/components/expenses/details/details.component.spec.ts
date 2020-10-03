import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: ExpenseDetailsComponent;
  let fixture: ComponentFixture<ExpenseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseDetailsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
