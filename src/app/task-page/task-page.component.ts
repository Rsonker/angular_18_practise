import { Component, Input, ViewChild } from '@angular/core';
import { ModalConfig, TaskPopupComponent } from "../component/shared/popups/task-popup/task-popup.component";
import { Form, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReindexPopupComponent } from "../component/shared/popups/reindex-popup/reindex-popup.component";
import { CommonPopupBhsiComponent, ModalScreenSize } from "../component/shared/popups/common-popup-bhsi/common-popup-bhsi.component";

@Component({
  selector: 'app-task-page',
  imports: [TaskPopupComponent, CommonModule, ReindexPopupComponent, CommonPopupBhsiComponent, ReactiveFormsModule],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.css'
})
export class TaskPageComponent {
  noticeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  @ViewChild('addTaskPopupModal') addTaskPopupModal!: TaskPopupComponent;
  @ViewChild('reindex') reindexpopupComponent: ReindexPopupComponent;
  @ViewChild('personDetails') commonPopupBSHI: CommonPopupBhsiComponent;
  reIndexModalConfig: ModalConfig;
  taskForm: FormGroup | any;
  modalConfig!: ModalConfig;
  personDetailsConfig: ModalConfig;
  

  ngOnInit() {

    this.personDetailsConfig = {
      modalTitle: "Person Details",
      onClose: this.savePersonDetails,
      onDismiss: this.dismissPersonDetails,
      size: ModalScreenSize.medium
    }
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
    personDetail: this.fb.group({
       firstName: ["John"],
        lastName: ["Doe"]
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

  public savePersonDetails= async(): Promise<any> =>{
    this.noticeForm.controls['personDetail']
    console.log(this.noticeForm.controls['personDetail'].getRawValue());
    return;
    
  }

  public dismissPersonDetails = async(): Promise<any> =>{
    console.log('dismiss');
    
    this.noticeForm.controls['personDetail'].reset();
    this.onDismissBtnClick();
    return true;
  }

  public onDismissBtnClick = async(): Promise<any> =>{
    // call API here
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

  openCommonPopup(){
    this.commonPopupBSHI.open();
  }

}
