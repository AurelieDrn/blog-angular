import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

	postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
  						private postService: PostService,
  						private router: Router) { }

  ngOnInit() {
  	this.initForm();
  }

  initForm() {
  	this.postForm = this.formBuilder.group({
  		titre: ['', Validators.required],
  		contenu: ['', Validators.required]
  	});
  }

  onSubmitForm() {
  	const formValue = this.postForm.value;
    const newPost = new Post(
      formValue['titre'],
      formValue['contenu'],
      0
    );
    console.log(newPost);
    this.postService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
