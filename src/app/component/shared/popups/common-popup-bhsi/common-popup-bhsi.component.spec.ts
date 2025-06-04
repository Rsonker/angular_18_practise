import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPopupBhsiComponent } from './common-popup-bhsi.component';

describe('CommonPopupBhsiComponent', () => {
  let component: CommonPopupBhsiComponent;
  let fixture: ComponentFixture<CommonPopupBhsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonPopupBhsiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonPopupBhsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
