import { Component, inject, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IntermediateLevelPopupComponent } from '../intermediate-level-popup/intermediate-level-popup.component';
import { AdvanceLevelPopupComponent } from '../advance-level-popup/advance-level-popup.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popups',
  imports: [],
  templateUrl: './popups.component.html',
  styleUrl: './popups.component.css'
})
export class PopupsComponent {
  userList: any;
  @ViewChild('AdvanceLevelPopupComponent') advanceLevelPopup!: AdvanceLevelPopupComponent;
  http:HttpClient = inject(HttpClient);

  constructor(
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    
  }

  open(content: any) {
    this.modalService.open(content);
  }
  

  openModalWithData() {
    const modalRef = this.modalService.open(IntermediateLevelPopupComponent,{
      size: 'lg',       // 'sm' | 'lg' | 'xl'
      centered: true,    // vertical center
      backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.name = 'Rohit';
    modalRef.componentInstance.body = 'This is a test body';

    modalRef.result.then(
      (result) => console.log('Modal closed with:', result),
      (reason) => console.log('Modal dismissed with:', reason)
    );
  }

  openAdvancedModal() {
      const modalRef = this.modalService.open(AdvanceLevelPopupComponent, { 
        centered: true,
        // backdrop: 'static',
        // keyboard: false
      });
      modalRef.result.then((data) => {
        console.log('Form submitted:', data);
      }).catch((err) => {
        console.log('Modal dismissed test :', err);
      });
  }

  async openWithDataFromAPI() {
    // this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any)=>{
    //   this.userList = res;
    // })
    // const user = await this.departmentService.getAllDepartments().toPromise(); // simulate API call
    // console.log(userList);
    
    // const modalRef = this.modalService.open(AdvanceLevelPopupComponent);
    // modalRef.componentInstance.name = user.name;
  }

  

  actionPerform(){
    this.advanceLevelPopup.open().then(result=>{
      if(result){
        console.log('Form submitted:', result);
      }else{
        console.log('Modal dismissed');
      }
    }).catch(err=>{
      console.log(err);
    }
    );
  }
  

}
