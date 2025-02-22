import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-api.component.html',
  styleUrl: './update-api.component.css'
})
export class UpdateApiComponent implements OnInit{

  http:HttpClient = inject(HttpClient);

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
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptPayload).subscribe({ 
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
    });
  }

  getDepartmentList(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe(
      {
        next: ((res:any)=>{
          this.departmentList = res['data'];
        })
      }
    );
  }

  onEdit(data: any){
    this.deptPayload = data;
  }
 
  onDelete(id: any){
    const isDelete = confirm("Are you sure you want to delete??");
    if(isDelete){
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentByDepartmentId?departmentId="+id).subscribe({
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
      })
    }
  }

  onUpdate(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.deptPayload).subscribe({
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
