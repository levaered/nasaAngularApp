import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APODComponent } from './apod.component';

describe('APODComponent', () => {
  let component: APODComponent;
  let fixture: ComponentFixture<APODComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APODComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APODComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
