import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [PostService]
})
export class CategoryComponent implements OnInit {
  posts: Post[];
  categories: string[] = ["Household", "Books", "Appliances", "Computer"];

  constructor(private router: Router, private postService: PostService){}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    console.log(this.posts);
  }

  showCategory(category: string){
    this.router.navigate(['posts', category]);
  }

}
