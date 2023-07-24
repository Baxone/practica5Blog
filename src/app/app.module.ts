//librerias
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//componentes
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCardComponent } from './components/post-card/post-card.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    FormComponent,
    PostListComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
