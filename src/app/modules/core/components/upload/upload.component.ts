import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-core-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  @Input() directory: string = '';
  constructor(private http: HttpClient) {}

  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    console.log(this.files);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  upload() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('profile-file', this.files[0], this.files[0].name);
    this.http
      .post('http://localhost:3000/profile-upload-single', uploadData)
      .subscribe((event) => console.log(event));
  }

  ngOnInit(): void {}
}
