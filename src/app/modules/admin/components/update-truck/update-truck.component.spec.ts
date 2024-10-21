import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTruckComponent } from './update-truck.component';

describe('UpdateTruckComponent', () => {
  let component: UpdateTruckComponent;
  let fixture: ComponentFixture<UpdateTruckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTruckComponent]
    });
    fixture = TestBed.createComponent(UpdateTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
