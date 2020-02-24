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
      Authorization: 'Bearer BQDTGRGaAyE5XKKyB-ofU9ajmuPQq-88MQS1WnxwAAwQZt5oreeWNulNlW-akKhb44D_Z7G15sV_CTHafgo'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtist(termino: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDTGRGaAyE5XKKyB-ofU9ajmuPQq-88MQS1WnxwAAwQZt5oreeWNulNlW-akKhb44D_Z7G15sV_CTHafgo'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers });
  }
}
