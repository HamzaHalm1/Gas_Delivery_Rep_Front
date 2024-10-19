import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDriverComponent } from './post-driver.component';

describe('PostDriverComponent', () => {
  let component: PostDriverComponent;
  let fixture: ComponentFixture<PostDriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostDriverComponent]
    });
    fixture = TestBed.createComponent(PostDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
