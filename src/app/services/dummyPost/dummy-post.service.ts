import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyPostService {

  constructor(private http: HttpClient) {}

   getAllPosts(){
    return this.http.get('https://dummyjson.com/posts');
   }
  
}
