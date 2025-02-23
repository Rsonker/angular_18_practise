import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbCommonModalComponent } from './ngb-common-modal.component';

describe('NgbCommonModalComponent', () => {
  let component: NgbCommonModalComponent;
  let fixture: ComponentFixture<NgbCommonModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbCommonModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgbCommonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
