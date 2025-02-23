import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbDateModalComponent } from './ngb-date-modal.component';

describe('NgbDateModalComponent', () => {
  let component: NgbDateModalComponent;
  let fixture: ComponentFixture<NgbDateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbDateModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgbDateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
