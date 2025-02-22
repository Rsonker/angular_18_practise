import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent implements OnInit {

  // constructor(private http:HttpClient){}
  http:HttpClient = inject(HttpClient);
  userList: any[] = [];
  customerList: any[] = [];


  ngOnInit(): void {
      // this.getAllUsers();
  }

  getAllUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any)=>{
      this.userList = res;
    })
  }
 
  getAllCustomers(){
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((res: any)=>{
      this.customerList = res.data;
    }
    ,err=>{
      console.log(err)
    }
    )
  }


}
