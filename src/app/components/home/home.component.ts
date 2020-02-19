import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public nuevosLanzamientos: any[] = [];

  constructor(private spotify: SpotifyService) {

  }

  ngOnInit() {
    this.obtieneAlbums();
  }

  public obtieneAlbums() {
    this.spotify.getNewReleases().subscribe((data: any) => {
      // console.log('Data', data.albums.items);
     this.nuevosLanzamientos = data.albums.items;
     console.log('Albums', this.nuevosLanzamientos);
    });
  }

}
