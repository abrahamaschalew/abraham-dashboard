import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';

import { FilesComponent } from './files.component';
import { UploadComponent } from './components/upload/upload.component';
import { ListFilesComponent } from './components/list-files/list-files.component';

@NgModule({
  declarations: [FilesComponent, UploadComponent, ListFilesComponent],
  imports: [CommonModule, FilesRoutingModule, MaterialModule, CoreModule],
})
export class FilesModule {}
