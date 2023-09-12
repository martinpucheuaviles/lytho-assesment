import { Component } from '@angular/core';
import { Picture } from '../pictures/picture.model';
import { PicturesService } from '../services/pictures.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  picture: Picture;

  constructor(private picturesService: PicturesService){
    this.picture = new Picture(null,'','','');
  }

  onSubmit(form) {
    if (form.valid) {
      this.picturesService.upload(this.picture).subscribe(
        (response) => {
          console.log('Upload successful', response);
        },
        (error) => {
          console.error('Upload error', error);
        }
      );

    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
