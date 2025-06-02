import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceLevelPopupComponent } from './advance-level-popup.component';

describe('AdvanceLevelPopupComponent', () => {
  let component: AdvanceLevelPopupComponent;
  let fixture: ComponentFixture<AdvanceLevelPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceLevelPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceLevelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
