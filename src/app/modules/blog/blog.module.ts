import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';

import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { PostsComponent } from './components/posts/posts.component';
import { PopularComponent } from './components/popular/popular.component';

@NgModule({
  declarations: [BlogComponent, BlogPostComponent, PostsComponent, PopularComponent],
  imports: [CommonModule, BlogRoutingModule, MaterialModule, CoreModule],
})
export class BlogModule {}
