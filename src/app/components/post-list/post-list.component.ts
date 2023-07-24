import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  arrPost: Post[] = [];
  postsServices = inject(PostsService);

  ngOnInit() {
    this.arrPost = this.postsServices.getAll();
  }
}
