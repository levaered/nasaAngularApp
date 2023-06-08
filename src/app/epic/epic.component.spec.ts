import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPICComponent } from './epic.component';

describe('EPICComponent', () => {
  let component: EPICComponent;
  let fixture: ComponentFixture<EPICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EPICComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EPICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
