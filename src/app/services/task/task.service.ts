import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiURL: string = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  saveNewTask(obj: any){
    return this.http.post(this.apiURL+"task", obj);
  }
  
  saveReindex(obj: any){
    return this.http.post(this.apiURL+"reindex", obj);
  }
  
  reIndexSuccess(obj: any){
    return this.http.post(this.apiURL+"reindex-success", obj);
  }

  IsTaskExistInDB(taskId: string){
    return this.http.get(`${this.apiURL+'task/'}${taskId}`);
  }

}
