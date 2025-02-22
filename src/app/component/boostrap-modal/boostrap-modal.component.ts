import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
//@ts-ignore
const $:any = window.$;

@Component({
  selector: 'app-boostrap-modal',
  standalone: true,
  imports: [],
  templateUrl: './boostrap-modal.component.html',
  styleUrl: './boostrap-modal.component.css'
})
export class BoostrapModalComponent {

  @ViewChild('modal') modal!: ElementRef;
  title: string = '';
  message: string = '';

  openModal(title: string, message: string) {
    // this.modal.nativeElement.show();
    // setTimeout(() => { this.closeModal()}, 2000);
    this.title = title;
    this.message = message;
    $(this.modal?.nativeElement).modal('show');
  }


  closeModal() {
    // this.modal.nativeElement.hide();
    $(this.modal?.nativeElement).modal('hide');
  }

}
