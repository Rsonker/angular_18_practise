import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

  http:HttpClient = inject(HttpClient);

  deptPayload: any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }
  departmentList: any[] = [];
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

}
