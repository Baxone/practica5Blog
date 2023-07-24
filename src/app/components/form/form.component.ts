import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  newpost: Post = { titulo: "", imagen: "", fecha: "", texto: "" }
  postsServices = inject(PostsService);


  getDataForm() {
    if (this.newpost.titulo !== "" && this.newpost.imagen !== "" && this.newpost.fecha !== "" && this.newpost.texto !== "") {
      let response = this.postsServices.insert(this.newpost);
      this.newpost = { titulo: "", imagen: "", fecha: "", texto: "" }
      alert(response);
    } else {
      alert('Los campos son obligatorios')
    }
  }
}
