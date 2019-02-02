import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/Http';
import { routing } from './app.routing';
import { CategoryComponent } from './category/category.component';
import { AppComponent } from './app.component';
import { CategoryFilter } from './categoryFilter.pipe';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { EditpostComponent } from './editpost/editpost.component'

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryFilter,
    PostListComponent,
    PostDetailsComponent,
    EditpostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
