import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspentionComponent } from './suspention.component';

describe('SuspentionComponent', () => {
  let component: SuspentionComponent;
  let fixture: ComponentFixture<SuspentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspentionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
