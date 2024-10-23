import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTruckComponent } from './search-truck.component';

describe('SearchTruckComponent', () => {
  let component: SearchTruckComponent;
  let fixture: ComponentFixture<SearchTruckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchTruckComponent]
    });
    fixture = TestBed.createComponent(SearchTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
