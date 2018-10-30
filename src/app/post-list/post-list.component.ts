import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
	@Input() postsArray: Post[];
  postsSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    // Pour être notifié lorsqu'un post est supprimé dans PostListItem et obtenir la liste de posts
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.postsArray = posts;
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
