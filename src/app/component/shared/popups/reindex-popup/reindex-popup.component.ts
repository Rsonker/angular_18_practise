import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfig } from '../task-popup/task-popup.component';
import { TaskService } from '../../../../services/task/task.service';
import { CommonModule } from '@angular/common';

export class ReIndexMetaData{
  docName: string;
  docType: string;
  docDescription: string;
  deliveryStatus:string;
  sendTo: string;
}
@Component({
  selector: 'app-reindex-popup',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reindex-popup.component.html',
  styleUrl: './reindex-popup.component.css'
})
export class ReindexPopupComponent {
  taskExist: boolean = false;

  constructor(private modalService: NgbModal,
        private taskService: TaskService
  ){}

  @ViewChild('reIndexModal') private modalContent: TemplateRef<ReindexPopupComponent>;
  @Input() reindexingForm: FormGroup;
  @Input() modalConfig: ModalConfig;
  public modalRef: NgbModalRef;

  open(){
    console.log(this.f);
    console.log(this.reindexingForm.getRawValue());
    
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      size: 'lg',
      centered: true
    }
    return new Promise<boolean> (resolve=>{
      this.modalRef = this.modalService.open(this.modalContent, ngbModalOptions)
      this.modalRef.result.then(resolve, resolve);
    })
  }

   async dismiss(): Promise<void> {
    console.log('Dismiss called');
    console.log(this.f);
    this.modalRef.dismiss();
  }

  get f():any{
    return this.reindexingForm.controls;
  }

  async onClose(): Promise<void>{
    console.log("Reindex Closed call!!!!");
    this.reindexing();
    
  }

  IsTaskExist(): Promise<boolean>{
    if(this.f.taskNumber.value){
      return this.taskService.IsTaskExistInDB(this.f.taskNumber.value).toPromise().then(response=>{
        this.taskExist = response ? true : false;
        return this.taskExist
      })
    }else{
      this.taskExist = false;
      return Promise.resolve(this.taskExist)
    }
  }

  reindexing = async ():Promise<any> =>{
    let reIndexMetaData: ReIndexMetaData;
    reIndexMetaData = this.reindexingForm.getRawValue();
    console.log(this.reindexingForm.getRawValue());
    
    await this.IsTaskExist();
    let reindex = {
        "docName": this.f.docName.value,
        "docDescription": this.f.docDescription.value,
        "deliveryStatus": this.f.deliveryStatus.value
    }

    if(this.taskExist){
      this.taskService.saveReindex(reindex).subscribe(
        {
          next:res=>{
              if(res){
                console.log(res);
                this.modalRef.close(true);
                this.modalConfig.onClose();
              }
          },
          error: err=>{
            console.log(err);
          }
        
      })
    }  
    else{
      console.log("task doesn't exist");
      
    }
  }

}
