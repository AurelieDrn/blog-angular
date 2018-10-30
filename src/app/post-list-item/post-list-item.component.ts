import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

	@Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  getTitle() {
  	return this.post.title;
  }

  getContent() {
  	return this.post.content;
  }

  getDate() {
  	return this.post.createdAt;
  }

  getPostLoveIts() {
    return this.post.loveIts;
  }

  onLoveIt() {
    this.post.loveIts++;
    this.postService.updatePost(this.post, this.post.loveIts--);
    
  }

  onDontLoveIt() {
    this.post.loveIts--;
    this.postService.updatePost(this.post, this.post.loveIts++);
    
  }

  // Supprime un post
  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }
}
