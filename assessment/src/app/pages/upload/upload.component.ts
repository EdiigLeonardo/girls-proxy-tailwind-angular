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

  constructor(private fb: FormBuilder, public mainService: MainService) {
    this.uploadForm = this.createUploadForm();
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

  onImageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.previewSafeUrl = URL.createObjectURL(file);

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

  private saveData(formData: any) {
    const storedImages = this.mainService.getDataFromLocalStorage('storedImages');
    storedImages.unshift(formData);
    this.mainService.updateLocalStorage('storedImages', storedImages);
  }
}
