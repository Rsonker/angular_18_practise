import { Component, Input, ViewChild } from '@angular/core';
import { ModalConfig, TaskPopupComponent } from "../component/shared/popups/task-popup/task-popup.component";
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-page',
  imports: [TaskPopupComponent, CommonModule],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.css'
})
export class TaskPageComponent {

  constructor(private fb: FormBuilder) { }

  @ViewChild('addTaskPopupModal') addTaskPopupModal!: TaskPopupComponent;
  taskForm: FormGroup | any;;
  modalConfig!: ModalConfig;
  

  ngOnInit() {
    this.modalConfig = {
      modalTitle: 'Add Task',
      dismissButtonLabel: 'Cancel',
      closeButtonLabel: 'Save',
      onClose: this.onSaveTask,
      onDismiss: this.onDismissClick,
  }

  this.taskForm = this.fb.group({
      taskName: [''],
      taskDescription: [''],
      dueDate: [''],
      priority: [''],
      assignedTo: [''],
      status: ['']
    });
}

  onSaveTask = async (e1?: any, e2?: any): Promise<boolean> => {
    console.log('Task saved:', e1, e2);
    return true; // Return true to close the modal
  }
  onDismissClick = async (): Promise<boolean> => {
    console.log('Task dismissed');
    return true; // Return true to close the modal
  }

  openAddTaskPopup() {
    this.addTaskPopupModal.open();
  }

}
