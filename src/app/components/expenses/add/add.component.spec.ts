import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ExpensesFacade } from '../expenses.facade';
import { ExpenseAddComponent } from './add.component';

const MockExpensesFacade = {
  checkValidInput: () => null,
  getErrors: () => null,
};

describe('AddComponent', () => {
  let component: ExpenseAddComponent;
  let fixture: ComponentFixture<ExpenseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseAddComponent],
      providers: [
        { provide: ExpensesFacade, useValue: MockExpensesFacade },
        FormBuilder,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
