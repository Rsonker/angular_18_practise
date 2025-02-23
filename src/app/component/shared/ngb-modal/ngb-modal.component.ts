import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-ngb-modal',
  imports: [FormsModule],
  templateUrl: './ngb-modal.component.html',
  styleUrl: './ngb-modal.component.css',
  standalone: true
})
export class NgbModalComponent {
  @Input() public user: any
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    console.log(this.user);
  }

  passBack() {
    this.passEntry.emit(this.user);
    this.activeModal.close(this.user);
  }

  closeModal(result?: any) {
    this.activeModal.close(result); // Send data back when modal closes
  }

}
