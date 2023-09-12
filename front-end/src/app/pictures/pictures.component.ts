import { Component } from '@angular/core';
import { Picture } from './picture.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent {
  selectedPicture: Picture;
  loadGalleryFlag = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const galleryRouteParam = params['gallery']; // Get the parameter value if present
      console.log(this.route.params)
      if (galleryRouteParam) {
        this.loadGalleryFlag = true;
      } else {
        // Parameter is not present, handle the case without it
      }
    });
  }  

  loadSelectedPicture(picture: Picture){
    
    this.selectedPicture = picture;
    this.loadGalleryFlag = false;
    
  }

  loadGallery(){
    this.loadGalleryFlag = true;
  }  
}
