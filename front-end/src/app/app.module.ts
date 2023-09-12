import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PicturesComponent } from './pictures/pictures.component';
import { PictureDetailsComponent } from './pictures/picture-details/picture-details.component';
import { PicturesGalleryComponent } from './pictures/pictures-gallery/pictures-gallery.component';

import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { PictureGalleryComponent } from './pictures/pictures-gallery/picture-gallery/picture-gallery.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', redirectTo: 'pictures', pathMatch: 'full' }, 
  { path: 'pictures/:gallery', component: PicturesComponent },
  { path: 'pictures', component: PicturesComponent },
  { path: 'upload', component: UploadComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PicturesComponent,
    PictureDetailsComponent,
    PicturesGalleryComponent,
    PictureGalleryComponent,
    UploadComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    MatPaginatorModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
