import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  uploadForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      keywords: this.fb.array([]),
      createdOn: [new Date(), Validators.required],
    });
  }

  onSubmit() {
    /* if (this.uploadForm.valid) {
      const uploadedImages = JSON.parse(localStorage.getItem('storedImages')) || [];
      uploadedImages.push(this.uploadForm.value);
      localStorage.setItem('storedImages', JSON.stringify(uploadedImages));
      this.uploadForm.reset();
    } */
  }

  addKeyword() {
    this.keywords.push(this.fb.control(''));
  }

  get keywords() {
    return this.uploadForm.get('keywords') as FormArray;
  }
}
