import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReindexPopupComponent } from './reindex-popup.component';

describe('ReindexPopupComponent', () => {
  let component: ReindexPopupComponent;
  let fixture: ComponentFixture<ReindexPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReindexPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReindexPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
