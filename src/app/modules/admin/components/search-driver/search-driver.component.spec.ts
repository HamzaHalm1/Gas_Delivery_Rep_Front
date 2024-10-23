import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDriverComponent } from './search-driver.component';

describe('SearchDriverComponent', () => {
  let component: SearchDriverComponent;
  let fixture: ComponentFixture<SearchDriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDriverComponent]
    });
    fixture = TestBed.createComponent(SearchDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
