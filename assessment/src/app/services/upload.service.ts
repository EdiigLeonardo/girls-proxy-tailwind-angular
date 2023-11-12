import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  uploadForm: FormGroup;

  constructor(private fb: FormBuilder, private mainService: MainService) {
    this.uploadForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      keywords: this.fb.array([]),
      createdOn: [new Date(), Validators.required],
      image: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.uploadForm.valid) {
      const formControls = ['title', 'description', 'price', 'keywords', 'createdOn', 'image'];
      const formData = new FormData();

      for (const controlName of formControls) {
        const control = this.uploadForm.get(controlName);
        if (control) {
          formData.append(controlName, control.value);
        }
      }

      console.log('FormData:', formData, this.uploadForm);
    } else {
      console.log('Formulário inválido');
    }

    //this.uploadForm.reset();
  }

  onImageChange(event: Event): void {
    // ... rest of the code
  }

  addKeyword(): void {
    this.keywords.push(this.fb.control(''));
  }

  get keywords(): FormArray {
    return this.uploadForm.get('keywords') as FormArray;
  }
}
