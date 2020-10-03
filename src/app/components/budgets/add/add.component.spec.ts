import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetAddComponent } from './add.component';

describe('AddComponent', () => {
  let component: BudgetAddComponent;
  let fixture: ComponentFixture<BudgetAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetAddComponent],
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
