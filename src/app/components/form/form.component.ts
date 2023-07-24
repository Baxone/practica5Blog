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


  getDataForm(form: any) {
    if (form.value.titulo !== "" && form.value.imagen !== "" && form.value.fecha !== "" && form.value.texto !== "") {
      let response = this.postsServices.insert(form.value);
      form.resetForm();
      alert(response);
    } else {
      alert('Los campos son obligatorios')
    }
  }
}
