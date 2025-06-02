import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

export interface ModalConfig {
  modalTitle?: string
  dismissButtonLabel?: string
  closeButtonLabel?: string
  shouldClose?(): Promise<boolean> | boolean
  shouldDismiss?(): Promise<boolean> | boolean
  onClose?(e1?: any, e2?: any): Promise<boolean> | boolean
  onDismiss?(): Promise<boolean> | boolean
  disableCloseButton?(): boolean
  disableDismissButton?(): boolean
  hideCloseButton?(): boolean
  hideDimissButton?(): boolean
  size?: string
  addIndividual?(contactId?: any, entityContactId?:any): void
}

export class TaskDetailModal {
      taskName?: string;
      taskDescription: string;
      dueDate: string;
      priority: string;
      assignedTo: string;
      status: string;
}

export enum DateFormats {
  USDates = 'yyyy-MM-dd',
  MediumDate = 'MMM-dd-y',
  ShortDate = 'MM/dd/yyyy',
  LongDate = 'MMMM d, y',
  FullDate = 'EEEE, MMMM d, y',
  ISODate = 'yyyy-MM-ddTHH:mm:ssZ',
}
@Component({
  selector: 'app-task-popup',
  imports: [ReactiveFormsModule, CommonModule],
  providers: [DatePipe],
  templateUrl: './task-popup.component.html',
  styleUrl: './task-popup.component.css'
})
export class TaskPopupComponent {

  @Input() public modalConfig!: ModalConfig;
  @Input() taskForm: FormGroup;
  public modalRef!: NgbModalRef;
  @ViewChild('modal') private modalContent!: TemplateRef<TaskPopupComponent>;

  constructor(private modalService: NgbModal,
    private datePipe: DatePipe,
  ) {}

  open(): Promise<boolean> {

    let ngbModalOptions: NgbModalOptions={
      centered: true,
      size: 'lg'
    }
    return new Promise((resolve) => {
      this.modalRef = this.modalService.open(this.modalContent, ngbModalOptions);
      this.modalRef.result.then(resolve, resolve);
    });
  }


  async dismiss(): Promise<void> {
    console.log('Dismiss called');
    if(this.modalConfig.shouldDismiss === undefined || (await this.modalConfig.shouldDismiss())) {
      const result = this.modalRef.dismiss === undefined || (await this.modalConfig.onDismiss());
      this.modalRef.dismiss(result);
    }
  }

  async onClose(): Promise<void> {
    console.log('Close called');
    this.onSaveTaskDetails();
  }

  public async onSaveTaskDetails(): Promise<any>{
    let taskDetails: TaskDetailModal;
    taskDetails = this.taskForm.getRawValue();
    taskDetails.dueDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    await this.modalConfig.onClose?.(taskDetails, this.taskForm);
    this.modalRef.close(taskDetails);
    return taskDetails;
  }



}
