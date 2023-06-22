import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfFiltersComponent } from './list-of-filters.component';

describe('ListOfFiltersComponent', () => {
  let component: ListOfFiltersComponent;
  let fixture: ComponentFixture<ListOfFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
