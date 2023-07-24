import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  //formulario
  newpost: Post = { titulo: "", imagen: "", fecha: "", texto: "" }

  getDataForm() {
    if (this.newpost.titulo !== "" && this.newpost.imagen !== "" && this.newpost.fecha !== "" && this.newpost.texto !== "") {
      this.arrPost.push(this.newpost);
      this.newpost = { titulo: "", imagen: "", fecha: "", texto: "" }
    } else {
      alert('Los campos son obligatorios')
    }
  }

}
