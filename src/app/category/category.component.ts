import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { Item } from '../item.model';
import { PostService } from '../post.service';
import { ItemService } from '../item.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [PostService, ItemService]
})
export class CategoryComponent implements OnInit {
  posts: Post[];
  categories: string[] = ["Household", "Books", "Appliances", "Computer"];
  item: FirebaseListObservable<any[]>;

  constructor(private router: Router, private postService: PostService, private itemService: ItemService){}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    console.log("Posts" + this.posts);
    this.item = this.itemService.getItems();
  }

  showCategory(category: string){
    this.router.navigate(['posts', category]);
  }
}
