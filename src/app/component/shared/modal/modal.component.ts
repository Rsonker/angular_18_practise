import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() title: string = 'Default Title';
  @Input() message: string = 'Default Message';
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit(); // Notify the parent to close modal
  }
  
}
