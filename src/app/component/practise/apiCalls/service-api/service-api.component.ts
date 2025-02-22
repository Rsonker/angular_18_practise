import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../../services/department/department.service';

@Component({
  selector: 'app-service-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './service-api.component.html',
  styleUrl: './service-api.component.css'
})
export class ServiceApiComponent implements OnInit{

  http:HttpClient = inject(HttpClient);
  deptService:DepartmentService = inject(DepartmentService);

  deptPayload: any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }
  departmentList: any[] = [];
  depatmentObj: any;
  ngOnInit(): void {
      this.getDepartmentList();
  }

  onSave(){
    this.deptService.saveNewDepartment(this.deptPayload).subscribe({
      next: ((res:any)=>{
            if(res.result)
              {
              alert("Department Created Successfully")
              this.getDepartmentList();
              }
            else
              alert('Duplicate Department hence failed!!!')
          }),
          error: ((err: any)=>{
            console.log(err)
          })
    })
  }

  getDepartmentList(){
    this.deptService.getAllDepartments().subscribe({
      next: ((res: any)=>{
        this.departmentList = res.data;
      })
    });
  }

  onEdit(data: any){
    this.deptPayload = data;
  }
 
  onDelete(id: any){
    const isDelete = confirm("Are you sure you want to delete??");
    if(isDelete){

      this.deptService.deleteDepartment(id).subscribe({
        next: ((res:any)=>{
          if(res.result)
            {
            alert("Department Deleted Successfully")
            this.getDepartmentList();
            }
          else
            alert('Department Deletion failed!!!')
        }),
        error: ((err:any)=>{
          console.error("API Failed"+err)
        }),
      });
    }
  }

  onUpdate(){
    this.deptService.updateDepartment(this.deptPayload).subscribe({
      next: (res: any)=>{
        if(res.result)
          {
          alert("Department Updated Successfully")
          this.getDepartmentList();
          }
        else
          alert('Department Update failed!!!')
      },
      error: (err)=>{console.log("API Failed")}
    })
  }

}
