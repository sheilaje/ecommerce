import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component'
import { PostListComponent } from './post-list/post-list.component'
import { PostDetailsComponent } from './post-details/post-details.component'
import { EditpostComponent } from './editpost/editpost.component'


const appRoutes: Routes = [{
  path: '',
  component: CategoryComponent
},
{
  path: 'posts/:category',
  component: PostListComponent
},
{
  path: 'post/:id',
  component: PostDetailsComponent
},
{
  path: 'edit/:id',
  component: EditpostComponent
}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
