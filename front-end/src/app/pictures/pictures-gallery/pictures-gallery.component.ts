import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Picture } from '../picture.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
// import { ActivatedRoute, Router } from '@angular/router';
import { PicturesService } from 'src/app/services/pictures.service';

@Component({
  selector: 'app-pictures-gallery',
  templateUrl: './pictures-gallery.component.html',
  styleUrls: ['./pictures-gallery.component.css']
})

export class PicturesGalleryComponent {
  @Output() pictureSelected = new EventEmitter<Picture>();
  
  constructor(private picturesService: PicturesService){}

  
  
  ngOnInit(): void {
    this.retrievePictures(); 
  }

  pictures: Picture[] = []
  
  /* uncomment this (and comment previous lines) to replace localhostDB pictues load by static picture elements
  ngOnInit(): void {
    this.paginateImages();
  }

  pictures: Picture[] = [
    new Picture(1,'Pastel de Choclo','A test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/El_pastel_de_choclo.jpg/1199px-El_pastel_de_choclo.jpg?20151019023518'),
    new Picture(2,'Charquican','A test', 'https://cocinachilena.cl/wp-content/uploads/2008/03/charquican-12-scaled.jpg'),
    new Picture(3,'Empanadas','empanaditas de carne','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvP_7naZRXcJKDVIGLHYQoAggBUTHQ-58B3DyMyktWYVeIONjO2nxhJXabAS5OFAs6PRM&usqp=CAU'),
    new Picture(4, 'Completo','el mejor completo chileno', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVbh8i0V3uO-omMuX6s0PgeZuKT9AahTGxSIke8yyJ-hIQ2jGM5iP7LJKyjgFlR62i4HU&usqp=CAU'),   
    new Picture(5, 'Terremoto', 'pa curarse', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3T1onENHBp4CEY_V12-z6_hRMugCoEd6veJWxfV9qUQeuZI3yvtASrhuHD16HumQ7eJA&usqp=CAU'),
    new Picture(6, 'Pisco Sour', '', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRbXTVV_Rj6wdp2OqvgZ2G-OvTshKEUSadT-L1BtpR7x4ip0Gh0uISrvX5Zwdl0OXSOo&usqp=CAU'),
    new Picture(7, 'Crudos', '', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKT9UjXEU-VnRyCI0UI7G-sHNFxrUP5HlJmIilG9LS85Y6xS63LHCaNijv64KZJ-fhB8&usqp=CAU'),
    new Picture(8, 'Cazuela', '', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHDavigIRoVby_MH53TzcE3EQXkD-A8OU1NNupkisX8dy4aTDVpxlPv_WGm2Ymod1BTA&usqp=CAU'),
    new Picture(9, 'Empanadas2', '', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzoRVc5PiupgkhxvWuPS4aZH0XBL3hUY1vRE_xXrl8kwf_xrH8-GNnO3viInLBVdQd-Wg&usqp=CAU'),
    new Picture(10, 'Sopaipa', '', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmr8K2-20hcN7B7f5P-bC1lVfpx11NlQxQ8OH9QC9y4lzLX9RuT7yL07oLi6j-NK7KhaU&usqp=CAU'),
    new Picture(11, 'Choclo2', '', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAJcQAnpZPDoFRK0PJ78YvJEE3x3uTu_j1tX8wfOXz9ouPXZwWdFWj142wrbAV4UK_WWM&usqp=CAU'),
    new Picture(12, 'Pebrecito', '', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFuw2Sazn5wlEpV1d83v9GZ3qWpW883SOcPvroseDgfNjC8SpsgUagEjSf0xcsHaV4vU&usqp=CAU'),
  ]*/
  
  
  retrievePictures(): void {
    this.picturesService.getAll()
      .subscribe({
        next: (data) => {
          this.pictures = data.map((item: any) => {
            const myModelInstance = new Picture(item.id,item.name,item.description,item.urlPath);
            return myModelInstance;
          });          

          console.log(this.pictures)
          this.paginateImages();
        },
        error: (e) => console.error(e)
      });
  }  

  paginatedPictures: Picture[] = [];

  pageSize = 9; // Number of images per page
  currentPage = 0;  

  @ViewChild(MatPaginator) paginator: MatPaginator;

  paginateImages() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedPictures = this.pictures.slice(startIndex, endIndex);
  }


  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.paginateImages();
  }

  onPictureSelected(picture: Picture){
    this.pictureSelected.emit(picture)
  }
}