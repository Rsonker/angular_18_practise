import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateLevelPopupComponent } from './intermediate-level-popup.component';

describe('IntermediateLevelPopupComponent', () => {
  let component: IntermediateLevelPopupComponent;
  let fixture: ComponentFixture<IntermediateLevelPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntermediateLevelPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntermediateLevelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
