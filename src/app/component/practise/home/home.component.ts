import { Component, ViewChild } from '@angular/core';
import { SimplePopupComponent } from "../../simple-popup/simple-popup.component";
import { CommonModule } from '@angular/common';
import { SimpleModalComponent } from '../../simple-modal/simple-modal.component';
import { BoostrapModalComponent } from '../../boostrap-modal/boostrap-modal.component';
import { HotColdObsComponent } from '../../hot-cold-obs/hot-cold-obs.component';
import { ModalComponent } from '../../shared/modal/modal.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SimplePopupComponent, CommonModule, 
    SimpleModalComponent, BoostrapModalComponent, 
    ModalComponent,
    HotColdObsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @ViewChild(BoostrapModalComponent) bootstrapModal?: BoostrapModalComponent;

  isPopupVisible = false;
  isModalVisible = false;

  isModalOpen = false;
  modalTitle = '';
  modalMessage = '';

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
    this.modalTitle = 'Dynamic Bootstrap Modal';
    this.modalMessage = 'This is a common reusable modal!';
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }


}
