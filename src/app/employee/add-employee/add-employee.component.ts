import { Component, inject, signal, TemplateRef, WritableSignal } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalComponent } from '../../component/shared/ngb-modal/ngb-modal.component';
import { NgbCommonModalComponent } from '../../component/shared/ngb-common-modal/ngb-common-modal.component';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  private modalService = inject(NgbModal);



	  openCommonModal() {
		const modalRef = this.modalService.open(NgbCommonModalComponent, {
		  size: 'lg',        // Modal size (sm, lg, xl)
		  backdrop: 'static' // Prevent closing on outside click
		});
	
		modalRef.componentInstance.title = "My Custom Modal";
		modalRef.componentInstance.content = "This is a dynamically passed content.";
		modalRef.componentInstance.data = { user: "John Doe", age: 30 };
	
		modalRef.result.then((result) => {
		  if (result) {
			console.log("Modal Result:", result);
		  }
		  else{
			console.log("Error")
		  }
		});
	  }

}
