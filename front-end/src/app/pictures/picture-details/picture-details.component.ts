import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Picture } from '../picture.model';


@Component({
  selector: 'app-picture-details',
  templateUrl: './picture-details.component.html',
  styleUrls: ['./picture-details.component.css']
})
export class PictureDetailsComponent {
  @Input() picture: Picture;
  @Output() returnToGallery = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void { }

  goBack() {
    this.returnToGallery.emit()
  }
}



