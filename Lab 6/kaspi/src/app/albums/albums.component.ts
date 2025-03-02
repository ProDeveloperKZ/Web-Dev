import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsService } from '../services/albums.service';

@Component({
  standalone:true,
  selector: 'app-albums',
  imports: [RouterModule,CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums: any[] = [];

  constructor(private albumsService: AlbumsService){}

  // ngOnInit(): void {
  //   this.albumsService.getAlbums().subscribe(data => {
  //     this.albums = data.map(album => {

  //       const savedAlbum = localStorage.getItem(`album-${album.id}`);
  //       return savedAlbum ? JSON.parse(savedAlbum) : album;
  //     });
  //   });
  // }

  // deleteAlbum(id: number): void {
  //   this.albumsService.deleteAlbum(id).subscribe(() => {
  //     this.albums = this.albums.filter(album => album.id !== id);
  //   });
  // }

  ngOnInit(): void {
    const storedAlbums = localStorage.getItem('albums');
    
    if (storedAlbums) {
      console.log('Loading albums from localStorage');
      this.albums = JSON.parse(storedAlbums);
    } else {
      this.albumsService.getAlbums().subscribe(data => {
        this.albums = data.map(album => {
          const savedAlbum = localStorage.getItem(`album-${album.id}`);
          return savedAlbum ? JSON.parse(savedAlbum) : album;
        });
  
        // Save the fetched albums in localStorage
        localStorage.setItem('albums', JSON.stringify(this.albums));
      });
    }
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe({
      next: () => {
        // Remove from component state
        this.albums = this.albums.filter(album => album.id !== id);
        
        // Save updated album list to localStorage
        localStorage.setItem('albums', JSON.stringify(this.albums));
  
        console.log(`Album with ID ${id} deleted successfully!`);
        console.log('Updated albums list:', this.albums);
        console.log('Stored in localStorage:', localStorage.getItem('albums'));
      },
      error: err => {
        console.error('Error deleting album:', err);
        alert('Failed to delete album!');
      }
    });
  }

  reloadData(): void {
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data; 
      localStorage.setItem('albums', JSON.stringify(this.albums)); 
      alert('Albums reloaded from server!');
    });
  }
  
}
