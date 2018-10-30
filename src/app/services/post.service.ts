import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

export class PostService {

	posts: Post[] = [];
	postsSubject = new Subject<Post[]>();

	constructor() {
			this.getPosts();
	}

	// Initialise le tableau de posts
	getPosts() {
		firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
	}

	// Ajoute un nouveau post
	createNewPost(newPost: Post) {
		console.log(newPost);
		this.posts.push(newPost);
		this.savePosts();
		this.emitPosts();
	}

	// Supprime un post
  removePost(post: Post) {
  const postIndexToRemove = this.posts.findIndex(
    (postEl) => {
      if(postEl === post) {
        return true;
      }
    }
  );
	this.posts.splice(postIndexToRemove, 1);
	this.savePosts();
  this.emitPosts();
	}

	emitPosts() {
    this.postsSubject.next(this.posts);
  }

  // Sauvegarde les posts dans la base de données
  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
	}
}