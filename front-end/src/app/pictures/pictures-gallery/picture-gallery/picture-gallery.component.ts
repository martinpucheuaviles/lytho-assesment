import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Picture } from '../../picture.model';

@Component({
  selector: 'app-picture-gallery',
  templateUrl: './picture-gallery.component.html',
  styleUrls: ['./picture-gallery.component.css']
})
export class PictureGalleryComponent {
  @Input() picture: Picture;
  @Output() pictureSelected = new EventEmitter<void>();

  constructor(){}

  onSelected(){
    this.pictureSelected.emit();
  }

}
