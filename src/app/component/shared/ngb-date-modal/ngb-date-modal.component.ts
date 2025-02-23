import { Component, inject, signal, TemplateRef, WritableSignal } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDatepickerModule, NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngb-date-modal',
  imports: [NgbDatepickerModule],
  templateUrl: './ngb-date-modal.component.html',
  styleUrl: './ngb-date-modal.component.css',
  standalone: true
})
export class NgbDateModalComponent {

	constructor(public activeModal: NgbActiveModal) {}
  private modalService = inject(NgbModal);
	closeResult: WritableSignal<string> = signal('');

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult.set(`Closed with: ${result}`);
			},
			(reason) => {
				this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}

	closeModal(result?: any) {
		this.activeModal.close(result); // Send data back when modal closes
	  }

}
