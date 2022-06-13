import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'new-post', loadChildren: () => import('./new-post/new-post.module').then(m => m.NewPostModule) }, { path: 'update-post', loadChildren: () => import('./update-post/update-post.module').then(m => m.UpdatePostModule) }, { path: 'home-post', loadChildren: () => import('./home-post/home-post.module').then(m => m.HomePostModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
