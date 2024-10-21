import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGasComponent } from './get-gas.component';

describe('GetGasComponent', () => {
  let component: GetGasComponent;
  let fixture: ComponentFixture<GetGasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetGasComponent]
    });
    fixture = TestBed.createComponent(GetGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
