import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadModule } from './modules/upload/upload.module';
import { ImagesModule } from './modules/images/images.module';

const routes: Routes = [
  { path: 'upload', loadChildren: () => import('./modules/upload/upload.module').then(m => m.UploadModule) },
  { path: 'images', loadChildren: () => import('./modules/images/images.module').then(m => m.ImagesModule) },
  { path: '', redirectTo: 'images', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

