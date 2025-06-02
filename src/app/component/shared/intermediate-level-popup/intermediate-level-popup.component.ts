import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-intermediate-level-popup',
  imports: [],
  templateUrl: './intermediate-level-popup.component.html',
  styleUrl: './intermediate-level-popup.component.css'
})
export class IntermediateLevelPopupComponent {
  constructor(public activeModal: NgbActiveModal) {}
  @Input() title!: string;
  @Input() body!: string;
  
  submit(){
    this.activeModal.close('some data');  
  }
}
