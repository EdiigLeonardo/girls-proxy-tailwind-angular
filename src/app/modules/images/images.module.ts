import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesRoutingModule } from './images-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ImagesComponent } from 'src/app/pages/images/images.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ImagesComponent],
  imports: [
    CommonModule,
    ImagesRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class ImagesModule { }
