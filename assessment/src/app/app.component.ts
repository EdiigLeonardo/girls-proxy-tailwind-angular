import { Component, OnInit } from '@angular/core';
import { MainService } from './services/main.service';
import {girlImages} from 'src/app/services/mockData';
import {data} from 'src/app/services/mockData';
import {ModalComponent} from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Reditus | Edig Leonardo';
  girlImages: any[] = [];
  isModalOpen = true;

  constructor(public mainService: MainService, private modalComponent: ModalComponent){
  }
  
  ngOnInit() {
    this.girlImages = <any>this.mainService.updateLocalStorage('storedImages', girlImages);
    if(this.girlImages){
      this.isModalOpen = false;
    }
  }
  
}
