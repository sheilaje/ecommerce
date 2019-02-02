import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  providers: [PostService]
})
export class PostDetailsComponent implements OnInit {
    posts: Post[];
    postId: number = null;
    currentPost: Post;

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.route.params.forEach((urlParameters) => {
    this.postId = parseInt(urlParameters['id']);
    this.currentPost = this.postService.getPostById(this.postId);
  });
  }

}
