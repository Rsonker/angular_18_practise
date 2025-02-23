import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbModalComponent } from './ngb-modal.component';

describe('NgbModalComponent', () => {
  let component: NgbModalComponent;
  let fixture: ComponentFixture<NgbModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgbModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
