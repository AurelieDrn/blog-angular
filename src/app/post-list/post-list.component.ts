import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

	@Input() postTitle: string;
	@Input() postContent: string;
	@Input() postLoveIts: number;
	@Input() postDate: Date;

  constructor() { }

  ngOnInit() {
  }

  getTitle() {
  	return this.postTitle;
  }

  getContent() {
  	return this.postContent;
  }

  getDate() {
  	return this.postDate;
  }

  onLoveIt() {
  	this.postLoveIts++;
  }

  onDontLoveIt() {
  	this.postLoveIts--;
  }
}
