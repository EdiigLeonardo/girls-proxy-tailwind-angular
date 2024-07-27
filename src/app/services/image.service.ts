import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { data } from 'src/app/services/mockData';
import { MainService } from 'src/app/services/main.service';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  images: data[] = [];
  keywordFilter$ = new Subject<string>();

  constructor(private mainService: MainService, private http: HttpClient) {}

  initializeImages(): data[] {
    const storedImages = this.mainService.getDataFromLocalStorage('storedImages');
    if (storedImages.length) {
      this.images = storedImages;
    }
    return storedImages
  }

  deleteImage(image: data): void {
    const index = this.images.indexOf(image);
    if (index !== -1) {
      this.images.splice(index, 1);
      this.updateImages();
    }
  }

  updateImages(): void {
    this.mainService.updateLocalStorage('storedImages', this.images);
  }

  filterImages(keyword: string): void {
    if (keyword) {
      this.images = this.images.filter((image) => image.keywords.includes(keyword));
    }
    else{
      this.images = this.mainService.getDataFromLocalStorage('storedImages');
    }
  }
  downloadImage(url: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' });
  }
}
