import { Component, signal, ViewChild, WritableSignal } from '@angular/core';
import { SimplePopupComponent } from "../../simple-popup/simple-popup.component";
import { CommonModule } from '@angular/common';
import { SimpleModalComponent } from '../../simple-modal/simple-modal.component';
import { BoostrapModalComponent } from '../../boostrap-modal/boostrap-modal.component';
import { HotColdObsComponent } from '../../hot-cold-obs/hot-cold-obs.component';
import { ModalComponent } from '../../shared/modal/modal.component';
import { NgbModal, NgbModule, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateModalComponent } from "../../shared/ngb-date-modal/ngb-date-modal.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgbModule,
    SimplePopupComponent, CommonModule,
    SimpleModalComponent, BoostrapModalComponent,
    ModalComponent,
    HotColdObsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private fb: FormBuilder, private modalService: NgbModal) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]]
    });
  }

  @ViewChild(BoostrapModalComponent) bootstrapModal?: BoostrapModalComponent;

  userForm!: FormGroup;

  isPopupVisible = false;
  isModalVisible = false;
  isDateModalOpen=  false;


  isModalOpen = false;
  modalTitle = '';
  modalMessage = '';
	closeResult: WritableSignal<string> = signal('');
 

  showModal() {
	this.isModalVisible = true;
  }

  hideModal() {
	this.isModalVisible = false;
  }
  showPopup() {
    this.isPopupVisible = true;
    }
  
  hidePopup(evt: any) {
    console.log(evt)
  this.isPopupVisible = false;
  }


  openCustomModal() {
    console.log(this.bootstrapModal);
    this.bootstrapModal?.openModal('Task Status', 'Task has been completed successfully');
  }


  openModal() {
    const modalRef = this.modalService.open(ModalComponent, { centered: true });
    modalRef.componentInstance.title = 'User Form';
    modalRef.componentInstance.form = this.userForm;
    modalRef.componentInstance.data = { user: "John Doe", age: 30 };

    modalRef.componentInstance.save.subscribe((formData: any) => {
      console.log('Saved Data:', formData);
      alert('Data Saved Successfully!');
    });
  }

  openDateModal() {
    this.isDateModalOpen = true;
    const modalRef = this.modalService.open(NgbDateModalComponent, {centered: true});
    console.log(modalRef)
    
    // modalRef.result.then(
		// 	(result) => {
		// 		this.closeResult.set(`Closed with: ${result}`);
		// 	},
		// 	(reason) => {
		// 		this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
		// 	},
		// );
    modalRef.result.then(
        (result) => {
          this.closeResult.set(`Closed with: ${result}`);
        },
        (reason) => {
          this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
        },
      );
	
   
   
   
    // modalRef.componentInstance.save.subscribe((formData: any) => {
    //   console.log('Saved Data:', formData);
    //   alert('Data Saved Successfully!');
    // });

  }

  closeModal() {
    this.isModalOpen = false;
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


}
