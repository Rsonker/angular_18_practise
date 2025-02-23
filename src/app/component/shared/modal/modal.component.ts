import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, TitleCasePipe, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() title: string = 'Default Title';
  @Input() message: string = 'Default Message';
  @Output() close = new EventEmitter<void>();
  @Input() form!: FormGroup;
  @Input() data!: any;
  @Output() save = new EventEmitter<any>();


  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.close.emit(); // Notify the parent to close modal
  }

  saveData() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
      this.activeModal.close();
    }else if(this.data){
      this.save.emit(this.data);
      this.activeModal.close();
    }
  }

  onClose(result?: any) {
    alert('onClose');
    this.activeModal.close(result);

  }
  
}
