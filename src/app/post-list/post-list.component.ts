import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostService]
})
export class PostListComponent implements OnInit {
  category: string = null;
  displayForm: boolean = false;
  currentPost: Post;
  postId: any;
  posts: Post[];

  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.route.params.forEach((urlParameters
    ) => {
    this.category = urlParameters['category'];
  });
  }

  showPostDetails(post: Post) {
    this.postId =post.id ;
    this.router.navigate(['post', this.postId]);
  }

  editPost(post: Post) {
    this.displayForm = true;
    console.log(this.displayForm);
    this.currentPost = post;
  }

  doneEditing() {
    this.displayForm = false;
  }

}
