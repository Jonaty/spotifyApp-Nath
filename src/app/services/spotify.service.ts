import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

  }

   getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQC8zTomRabxS3_4HAW08IqS27-f5jWehU9CRcwbaMYbQRLWw9DYxQjhT7T-M08v7pNAAXlV4e9CfcXvQnM'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
          .subscribe(data => {
            console.log('Data', data);
          });
  }
}
