import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

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
      price: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      keywords: this.fb.array([]),
      createdOn: [new Date(), Validators.required],
      image: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.uploadForm.valid) {
      const formControls = ['title', 'description', 'price', 'keywords', 'createdOn', 'image'];

      for (const controlName of formControls) {
        const control = this.uploadForm.get(controlName);
        if (control) {
          console.log('FormData:', controlName, control.value);
        }
      }
    } else {
      console.log('Formulário inválido');
    }

    //this.uploadForm.reset();
  }


  onImageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      const imageControl = this.uploadForm.get('image');
      const titleControl = this.uploadForm.get('title');

      if (imageControl) {
        imageControl.setValue(file);
      }

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
}