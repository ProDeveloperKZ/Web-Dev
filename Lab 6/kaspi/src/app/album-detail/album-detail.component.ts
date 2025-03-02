import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../services/albums.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  standalone:true,
  selector: 'app-album-detail',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})

export class AlbumDetailComponent {
  album:any = {};

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ){}

  // ngOnInit():void{
  //   const albumId = this.route.snapshot.paramMap.get('id');
  //   if(albumId) {
  //       this.albumsService.getAlbumById(+albumId).subscribe(data => {
  //       this.album = data;
  //     })
  //   }
  // }
  ngOnInit(): void {
    const albumId = this.route.snapshot.paramMap.get('id');
  
    if (albumId) {
      const savedAlbum = localStorage.getItem(`album-${albumId}`);
  
      if (savedAlbum) {
        this.album = JSON.parse(savedAlbum);
      } else {
        this.albumsService.getAlbumById(+albumId).subscribe(data => {
          this.album = data;
        });
      }
    }
  }
  
  

  saveAlbum(): void {
    this.albumsService.updateAlbum(this.album.id, this.album).subscribe(response => {
      console.log('Updated Album:', response); 
      alert('Album updated successfully!'); 

      localStorage.setItem(`album-${this.album.id}`, JSON.stringify(this.album));
  
      
    }, error => {
      console.error('Error updating album:', error);
      alert('Failed to update album!');
    });
  }
  

  goBack(): void {
    window.history.back();
  }
}
