import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSearchBarComponent } from './navbar-search-bar.component';

describe('NavbarSearchBarComponent', () => {
  let component: NavbarSearchBarComponent;
  let fixture: ComponentFixture<NavbarSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
