import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { POST } from '../db/posts.db';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPost: Post[] = POST;

  constructor() { }

  getAll(): Post[] {
    return this.arrPost
  }

  insert(newpost: Post): string {
    let posicion = this.arrPost.push(newpost);
    if (posicion) {
      return "Articulo insertado correctamente";
    } else {
      return "No se ha podido insertar el articulo";
    }
  }
}
