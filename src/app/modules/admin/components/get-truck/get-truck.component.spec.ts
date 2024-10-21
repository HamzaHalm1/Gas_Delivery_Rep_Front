import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTruckComponent } from './get-truck.component';

describe('GetTruckComponent', () => {
  let component: GetTruckComponent;
  let fixture: ComponentFixture<GetTruckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTruckComponent]
    });
    fixture = TestBed.createComponent(GetTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
