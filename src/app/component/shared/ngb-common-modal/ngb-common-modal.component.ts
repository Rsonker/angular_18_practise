import { JsonPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngb-common-modal',
  imports: [JsonPipe, NgIf],
  templateUrl: './ngb-common-modal.component.html',
  styleUrl: './ngb-common-modal.component.css',
  standalone: true
})
export class NgbCommonModalComponent {

  @Input() title: string = 'Default Title';  // Modal title
  @Input() content: string = '';            // Modal content (text)
  @Input() data: any;                        // Any additional data

  constructor(public activeModal: NgbActiveModal) {}

  closeModal(result?: any) {
    this.activeModal.close(result); // Send data back when modal closes
    if(result)
      console.log("Modal Result:", result);
  }

}
