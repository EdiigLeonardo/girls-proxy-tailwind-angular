import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {
  filterForm: FormGroup;

  constructor() {
    this.filterForm = new FormGroup({
      keywordFilter: new FormControl('')
    });

    this.filterForm
      .get('keywordFilter')
      .valueChanges.pipe(
        debounceTime(300), 
        distinctUntilChanged() 
      )
      .subscribe(() => this.filterImages()); 
  }

  filterImages() {
    const keyword = this.filterForm.get('keywordFilter').value;
    
  }
}
