import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-simple-popup',
  standalone: true,
  imports: [],
  templateUrl: './simple-popup.component.html',
  styleUrl: './simple-popup.component.css'
})
export class SimplePopupComponent {

  @Output() close = new EventEmitter<void>();

  closePopup() {
	this.close.emit();
  }

}
