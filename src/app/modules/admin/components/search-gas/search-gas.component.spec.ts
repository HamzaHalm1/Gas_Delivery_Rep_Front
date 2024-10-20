import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGasComponent } from './search-gas.component';

describe('SearchGasComponent', () => {
  let component: SearchGasComponent;
  let fixture: ComponentFixture<SearchGasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchGasComponent]
    });
    fixture = TestBed.createComponent(SearchGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
