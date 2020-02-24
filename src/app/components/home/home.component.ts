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

  async ngOnInit() {
   await  this.obtieneAlbums();
  }

  public async obtieneAlbums() {
    this.spotify.getNewReleases().subscribe((data: any) => {
      try {
        this.nuevosLanzamientos = data.albums.items;
        console.log('Albums', this.nuevosLanzamientos);
      } catch (error) {
        console.error(error);
      }

    });
  }

}
