import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  public searchArtist(termino: string) {
    console.log('Termino', termino);

/*     this.spotify.getArtist(termino).subscribe((data: any) => {
    console.log('Artistas', data);
    }); */
  }

}
