import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { ModalConfig } from '../task-popup/task-popup.component';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

export enum ModalScreenSize{
  small = 'sm',
  large = 'lg',
  extraLarge = 'xl',
  medium = 'md'
}

@Component({
  selector: 'app-common-popup-bhsi',
  imports: [CommonModule],
  templateUrl: './common-popup-bhsi.component.html',
  styleUrl: './common-popup-bhsi.component.css'
})
export class CommonPopupBhsiComponent {

  @Input() public modalConfig: ModalConfig;
  @ViewChild('modal') private modalContent: TemplateRef<CommonPopupBhsiComponent>;
  modalRef: NgbModalRef;
  constructor(private modalService: NgbModal){}

  ngOnInit():void{

  }

  open(): Promise<boolean>{
    let ngbModalOptions: NgbModalOptions ={
      backdrop: 'static',
      keyboard: false,
      size: this.modalConfig?.size ?? ModalScreenSize.large,
      centered: true
    }
    return new Promise<boolean>(resolve => {
      this.modalRef = this.modalService.open(this.modalContent, ngbModalOptions);
      this.modalRef.result.then(resolve, resolve)
    })
  }
  
  
  async close(): Promise<void>{
    if(this.modalConfig.shouldClose === undefined || (await this.modalConfig.shouldClose())){
      const result = this.modalConfig.onClose === undefined || (await this.modalConfig.onClose())
      this.modalRef.close(result);
    }
  }


  async dismiss(): Promise<void>{
    if(this.modalConfig.shouldDismiss === undefined || (await this.modalConfig.shouldDismiss())){
      const result = this.modalConfig.onDismiss === undefined || (await this.modalConfig.onDismiss())
      this.modalRef.dismiss(result);
    }
  }


  ngOnDestroy():void{
    this.modalService.dismissAll('Grid Destryed')
  }


}
