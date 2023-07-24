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


  //lista post
  arrPost: Post[] = [
    { titulo: 'En un lugar de la mancha', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Paisaje%2C_provincia_de_Ciudad_Real_%283742104133%29.jpg/600px-Paisaje%2C_provincia_de_Ciudad_Real_%283742104133%29.jpg', fecha: '2023-07-24', texto: 'La mancha. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim magna ac volutpat sodales. Phasellus at justo eros. Nunc venenatis tortor a ante semper, et facilisis sapien mollis. Quisque in augue tempor, finibus ipsum feugiat, hendrerit urna. Fusce non efficitur mi. Donec euismod lectus id ipsum tempus, dignissim suscipit ipsum rhoncus. Donec finibus ligula nec imperdiet sodales. Duis tincidunt turpis et justo sagittis, quis ultricies lacus congue. Duis suscipit purus vitae tellus congue elementum. Morbi aliquet sollicitudin sapien nec mattis. ' },
    { titulo: 'Solo se que no se nada', imagen: 'https://pymstatic.com/62740/conversions/rene-descartes-small-16_9_webp.webp', fecha: '2023-04-12', texto: 'Rene descartes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim magna ac volutpat sodales.<strong>Texto negrita</strong> Phasellus at justo eros. Nunc venenatis tortor a ante semper, et facilisis sapien mollis. Quisque in augue tempor, finibus ipsum feugiat, hendrerit urna. Fusce non efficitur mi. Donec euismod lectus id ipsum tempus, dignissim suscipit ipsum rhoncus. Donec finibus ligula nec imperdiet sodales. Duis tincidunt turpis et justo sagittis, quis ultricies lacus congue. Duis suscipit purus vitae tellus congue elementum. Morbi aliquet sollicitudin sapien nec mattis. ' }
  ];



}
