import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDriverComponent } from './get-driver.component';

describe('GetDriverComponent', () => {
  let component: GetDriverComponent;
  let fixture: ComponentFixture<GetDriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetDriverComponent]
    });
    fixture = TestBed.createComponent(GetDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
