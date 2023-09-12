import { Injectable } from '@angular/core';
import { Picture } from '../pictures/picture.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})

export class PicturesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Picture[]> {
    return this.http.get<Picture[]>(`${baseUrl}/pictures`);
  }

  upload(picture: Picture): Observable<any> {
    return this.http.post(`${baseUrl}/uploadPicture`, picture);
  }

  // get(id: any): Observable<Picture> {
  //   return this.http.get<Picture>(`${baseUrl}/${id}`);
  //   // return this.http.get(`${baseUrl}/${id}`);
  // }

  // update(id: any, data: any): Observable<any> {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }

  // delete(id: any): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }

  // findByTitle(title: any): Observable<Picture[]> {
  //   return this.http.get<Picture[]>(`${baseUrl}?title=${title}`);
  // }
}
