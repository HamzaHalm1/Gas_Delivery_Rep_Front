import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPurchasesComponent } from './get-purchases.component';

describe('GetPurchasesComponent', () => {
  let component: GetPurchasesComponent;
  let fixture: ComponentFixture<GetPurchasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetPurchasesComponent]
    });
    fixture = TestBed.createComponent(GetPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
