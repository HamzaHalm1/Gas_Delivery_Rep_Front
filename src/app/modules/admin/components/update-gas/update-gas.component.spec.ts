import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGasComponent } from './update-gas.component';

describe('UpdateGasComponent', () => {
  let component: UpdateGasComponent;
  let fixture: ComponentFixture<UpdateGasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateGasComponent]
    });
    fixture = TestBed.createComponent(UpdateGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
