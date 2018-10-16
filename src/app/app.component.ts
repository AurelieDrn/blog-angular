import { Component, Input } from '@angular/core';
import { Post } from './models/Post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
  	new Post(
  		"Mon premier post",
  		"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  		2),
  	new Post(
  		"Mon deuxième post",
  		"Nunc iaculis orci in pellentesque maximus. Duis in posuere leo. Vivamus ac lectus massa. Etiam eleifend cursus metus id scelerisque. Sed mollis in dolor sit amet venenatis. Mauris sollicitudin ligula sed libero suscipit blandit. Integer non dui consequat, sollicitudin arcu non, faucibus felis. Pellentesque convallis risus auctor dui aliquam consectetur.",
  		-1),
  	new Post(
  		"Encore un post",
  		"Suspendisse eu sollicitudin ante. Cras et scelerisque eros, et aliquam velit. Praesent eget orci porta, commodo lectus sed, auctor velit. Vivamus rhoncus ante purus. Sed mi enim, pharetra non enim ac, mattis lobortis purus. Quisque scelerisque velit vel libero convallis sollicitudin. Cras ornare tincidunt elementum. Donec suscipit suscipit vestibulum.",
  		0)
  ];
}
