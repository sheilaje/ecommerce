import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model'

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  @Input() currentPost: Post;
  @Output() clickSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  doneEditing(){
    this.clickSender.emit();
  }

}
