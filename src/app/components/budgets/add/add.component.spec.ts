import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { BudgetsFacade } from '../budgets.facade';
import { BudgetAddComponent } from './add.component';

const MockBudgetsFacade = {
  checkValidInput: () => null,
  getErrors: () => null,
};

describe('AddComponent', () => {
  let component: BudgetAddComponent;
  let fixture: ComponentFixture<BudgetAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetAddComponent],
      providers: [
        { provide: BudgetsFacade, useValue: MockBudgetsFacade },
        FormBuilder,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
