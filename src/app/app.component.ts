import { Component, Input } from '@angular/core';
import { Post } from './models/Post.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDtoOI046QqZpaaglJxmtrNHdHMkE4_9f4",
      authDomain: "blog-angular-96065.firebaseapp.com",
      databaseURL: "https://blog-angular-96065.firebaseio.com",
      projectId: "blog-angular-96065",
      storageBucket: "blog-angular-96065.appspot.com",
      messagingSenderId: "333973019481"
    };
    firebase.initializeApp(config);
    }
}
