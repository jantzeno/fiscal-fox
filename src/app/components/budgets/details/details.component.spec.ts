import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { BudgetDetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: BudgetDetailsComponent;
  let fixture: ComponentFixture<BudgetDetailsComponent>;
  let mockStore: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      declarations: [BudgetDetailsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          // https://www.joshuacolvin.net/mocking-activated-route-data-in-angular/
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                get: () => 1, // represents the budgetId
              },
            },
          },
        },
      ],
    });
    fixture = TestBed.createComponent(BudgetDetailsComponent);
    mockStore = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
