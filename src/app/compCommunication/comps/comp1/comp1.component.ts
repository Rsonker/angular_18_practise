import { Component } from '@angular/core';
import { DummyPostService } from '../../../services/dummyPost/dummy-post.service';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {

  constructor(private posts: DummyPostService ){}
  postList:any[] = [];

  ngOnInit(){
    this.getPosts()
  }

  getPosts(){
    this.posts.getAllPosts().subscribe(
      (res)=> {console.log(res)}
    )
  }

}
