import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossitionComponent } from './possition.component';

describe('PossitionComponent', () => {
  let component: PossitionComponent;
  let fixture: ComponentFixture<PossitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PossitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PossitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
