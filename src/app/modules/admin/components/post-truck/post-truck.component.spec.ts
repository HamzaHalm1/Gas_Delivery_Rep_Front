import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTruckComponent } from './post-truck.component';

describe('PostTruckComponent', () => {
  let component: PostTruckComponent;
  let fixture: ComponentFixture<PostTruckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostTruckComponent]
    });
    fixture = TestBed.createComponent(PostTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
