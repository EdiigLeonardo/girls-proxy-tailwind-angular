import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from 'src/app/pages/upload/upload.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    UploadRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class UploadModule { }
