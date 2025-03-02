import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  photos: any[] = []
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ){}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchPhotos();
  }

  // fetchPhotos(): void {
  //   this.http
  //     .get<any[]>(`https://jsonplaceholder.typicode.com/albums/${this.albumId}/photos`)
  //     .subscribe((data) => {
  //       this.photos = data;
  //     });
  // }
  fetchPhotos(): void {
    this.http
      .get<any[]>(`https://jsonplaceholder.typicode.com/albums/${this.albumId}/photos`)
      .subscribe((data) => {
        this.photos = data.map(photo => ({
          ...photo,
          thumbnailUrl: photo.thumbnailUrl.replace('via.placeholder.com', 'dummyimage.com')
        }));
      });
  }

  goBack(): void {
    window.history.back();
  }

}
