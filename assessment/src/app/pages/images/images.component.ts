import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { data } from 'src/app/services/mockData';
import { girlImages } from 'src/app/services/mockData';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { ImagesService } from 'src/app/services/image.service';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  faSearch = faSearch;
  faImage = faImage;
  faTrash = faTrash;
  faDownload = faDownload;
  filterForm: FormGroup;
  images: data[] = [];
  keywordFilter$ = new Subject<string>();
  keywordFormControl: FormControl;
  isHovered: boolean = false;

  constructor(private fb: FormBuilder, public imagesService: ImagesService) {
    this.filterForm = this.fb.group({
      keywordFilter: [''],
    });

    this.keywordFormControl = this.filterForm.get('keywordFilter') as FormControl;

    this.keywordFormControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        if (value) {
          this.keywordFilter$.next(value);
        }
      });

    this.keywordFilter$.subscribe((keyword) => {
      this.filterImages(keyword);
    });
  }

  ngOnInit() {
    this.images = this.imagesService.initializeImages();
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
