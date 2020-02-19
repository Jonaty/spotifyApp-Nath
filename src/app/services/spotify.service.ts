import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  /**
   * Obtiene la información de los ultimos 20 lanzamientos de spotify.
   */
   getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBKcYJe2peE_fFi2wD1vVVZlvLJ04CMc09M84hjuy-7lfqhgvUBi_gk2J42Iwlv2lNUPKcagptE6IzFeXk'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
