import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import * as _ from 'lodash';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  filterForm: FormGroup;
  images: any[] = [];
  keywordFilter$ = new Subject<string>();

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      keywordFilter: [''],
    });

    this.filterForm
      ?.get('keywordFilter')
      ?.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      ?.subscribe((value) => {
        if (value) {
          this.keywordFilter$.next(value);
        }
      });

    this.keywordFilter$.subscribe((keyword) => {
      if (keyword) {
        this.filterImages(keyword);
      }
    });

  }

  ngOnInit() {
    // Carregar imagens iniciais do armazenamento local
    const storedImages = localStorage.getItem('storedImages');
    if (storedImages) {
      this.images = JSON.parse(storedImages);
    }
  }

  deleteImage(image: any) {
    const index = this.images.indexOf(image);
    if (index !== -1) {
      this.images.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    localStorage.setItem('storedImages', JSON.stringify(this.images));
  }

  filterImages(keyword: string) {
    if (keyword) {
      this.images = this.images.filter((image) =>
        image.keywords.includes(keyword)
      );
    } else {
      const storedImages = localStorage.getItem('storedImages');
      if (storedImages) {
        this.images = JSON.parse(storedImages);
      }
    }
  }
}
