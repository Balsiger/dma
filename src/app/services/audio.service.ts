import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  constructor(private readonly googleApi: GoogleApiService) {}

  async play(src: string) {
    //const source = (src.startsWith('http') ? '' : '/assets/sounds/') + src;
    //console.log('~~src', source);
    //new Audio(source).play();
    const id = '1u9pVlzYCaGAPrUT4YsI3EubIX0Ek_t9H';
    const CLIENT_ID = '115956485038-k19joneu8vplmm7gjgoiravjo9mu4ahj.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyBROfjsWBN2jo-jJrEE9jCdAtibEkl-FYA';
  }
}
