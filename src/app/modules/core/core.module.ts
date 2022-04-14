import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxDropzoneModule } from 'ngx-dropzone';

import { MaterialModule } from '../material/material.module';

import { UploadComponent } from './components/upload/upload.component';

const imports = [NgxDropzoneModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [UploadComponent],
  imports: [CommonModule, MaterialModule, ...imports],
  exports: [imports, UploadComponent],
})
export class CoreModule {}
