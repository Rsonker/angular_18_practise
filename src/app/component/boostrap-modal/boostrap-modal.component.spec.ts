import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostrapModalComponent } from './boostrap-modal.component';

describe('BoostrapModalComponent', () => {
  let component: BoostrapModalComponent;
  let fixture: ComponentFixture<BoostrapModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoostrapModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoostrapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
