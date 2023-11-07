import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  uploadForm: FormGroup;
  constructor() {
    this.uploadForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      keywords: new FormControl([], [Validators.required]),
      createdOn: new FormControl(new Date(), [Validators.required]),
    });
  }
  
  // Implementar a lógica para habilitar/desabilitar o botão "Finalizar Upload" quando o formulário for válido e a função para salvar os dados no localStorage.
}
