import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { data as DataInf } from 'src/app/services/mockData';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})

export class UploadComponent {
  previewSafeUrl: any;
  uploadForm: FormGroup;
  reader: FileReader;

  constructor(private fb: FormBuilder, public mainService: MainService) {
    this.uploadForm = this.createUploadForm();
    this.reader = new FileReader();
  }

  onSubmit() {
    if (this.uploadForm.valid) {
      const formData = this.getFormData();
      this.saveData(formData);
      this.uploadForm.reset();
      this.previewSafeUrl = '';
    } else {
      alert('Formulário inválido, verifique se está devidamente preenchido');
    }
  }

  onLoad(){
    const s:string|undefined = this.reader.result?.toString();
    localStorage.setItem("image", s!  );
    console.log( s  );
    this.previewSafeUrl = s;
  }

  onImageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];

      var blob = new Blob([file], { type: file.type });

      this.reader.addEventListener("load", this.onLoad.bind(this) , false);
      this.reader.readAsDataURL( blob );
      const titleControl = this.uploadForm.get('title');

      if (titleControl) {
        titleControl.setValue(file.name);
      }
    }
  }
  

  addKeyword() {
    this.keywords.push(this.fb.control(''));
  }

  get keywords() {
    return this.uploadForm.get('keywords') as FormArray;
  }

  private createUploadForm() {
    return this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      keywords: this.fb.array([]),
      createdOn: [new Date(), Validators.required],
      image: [null, Validators.required],
    });
  }

  private getFormData() {
    const formData: any = {};
    const formControls = ['title', 'description', 'price', 'keywords', 'createdOn', 'image'];

    for (const controlName of formControls) {
      const control = this.uploadForm.get(controlName);
      if (control) {
        formData[controlName] = controlName === 'image' ? this.previewSafeUrl : control.value;
      }
    }

    return formData;
  }

  private saveData(formData: DataInf) {
    const storedImages = this.mainService.getDataFromLocalStorage('storedImages');
    storedImages.unshift(formData);
    this.mainService.updateLocalStorage('storedImages', storedImages);
  }

  isValidUrl(url: string): boolean {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(url);
  }
}
