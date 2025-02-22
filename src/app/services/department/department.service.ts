import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  apiURL: string = "https://projectapi.gerasim.in/api/Complaint/";

  getAllDepartments(){
    return this.http.get(this.apiURL+"/GetParentDepartment");
  }

  saveNewDepartment(obj: any){
    return this.http.post(this.apiURL+"AddNewDepartment", obj);
  }

  deleteDepartment(id: number){
    return this.http.delete(this.apiURL+"DeletedepartmentByDepartmentId?departmentId="+id);
  }
  
  updateDepartment(data: any){
    return this.http.post(this.apiURL+"UpdateDepartment", data);
  }
}
