import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGasComponent } from './post-gas.component';

describe('PostGasComponent', () => {
  let component: PostGasComponent;
  let fixture: ComponentFixture<PostGasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostGasComponent]
    });
    fixture = TestBed.createComponent(PostGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
