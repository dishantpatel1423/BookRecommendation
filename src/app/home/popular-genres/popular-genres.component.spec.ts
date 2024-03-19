import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularGenresComponent } from './popular-genres.component';

describe('PopularGenresComponent', () => {
  let component: PopularGenresComponent;
  let fixture: ComponentFixture<PopularGenresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularGenresComponent]
    });
    fixture = TestBed.createComponent(PopularGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
