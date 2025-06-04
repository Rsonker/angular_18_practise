import { Component, Input, ViewChild } from '@angular/core';
import { ModalConfig, TaskPopupComponent } from "../component/shared/popups/task-popup/task-popup.component";
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReindexPopupComponent } from "../component/shared/popups/reindex-popup/reindex-popup.component";

@Component({
  selector: 'app-task-page',
  imports: [TaskPopupComponent, CommonModule, ReindexPopupComponent],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.css'
})
export class TaskPageComponent {
  noticeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  @ViewChild('addTaskPopupModal') addTaskPopupModal!: TaskPopupComponent;
  @ViewChild('reindex') reindexpopupComponent: ReindexPopupComponent;
  reIndexModalConfig: ModalConfig;
  taskForm: FormGroup | any;
  modalConfig!: ModalConfig;
  

  ngOnInit() {
    this.modalConfig = {
      modalTitle: 'Add Task',
      dismissButtonLabel: 'Cancel',
      closeButtonLabel: 'Save',
      onClose: this.onSaveTask,
      onDismiss: this.onDismissClick,
  }

  this.reIndexModalConfig={
    onClose: this.onReindexSubmit
  }

  this.taskForm = this.fb.group({
      taskName: ['New Task 01'],
      taskDescription: ['Task Description'],
      dueDate: ['2025-06-04'],
      priority: ['high'],
      assignedTo: ['Rohit'],
      status: ['in-progress']
    });

  this.noticeForm = this.fb.group({
    loginForm: this.fb.group({
        username: [],
        password: []
    }),
    reindexingForm: this.fb.group({
        docDate: ['2025-06-04'],
        docName: ['New Document reindex 01'],
        docDescription: ['Document Description reindex 01'],
        docType: ['pdf'],
        sendTo: ['Rohit'],
        deliveryStatus: ['in-progress'],
        taskNumber: ['34aa']
    })
  })
}

  onReindexSubmit = async(data: any): Promise<boolean>=>{
    return true;
  }

  onSaveTask = async (data:any): Promise<boolean> => {
    console.log(this.taskForm.getRawValue());
    console.log('Task saved:', data);
    return true; // Return true to close the modal
  }
  onDismissClick = async (): Promise<boolean> => {
    console.log('Task dismissed');
    return true; // Return true to close the modal
  }

  openAddTaskPopup() {
    this.addTaskPopupModal.open();
  }

  openReIndexPopup(){
    this.reindexpopupComponent.open();
  }

}
