import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'jdrNJ1pN6133kTve7aeNrVuQLTNRJgOh';
  private _historial: string[] = [];
  public results: any[]=[]

  get historial(): string[] {
    return [...this._historial];
  }
  constructor(private http: HttpClient){}
  searchGifs(value: string) {
    value = value.trim().toLocaleLowerCase();

    if (!this.historial.includes(value)) {
      this._historial.unshift(value);
      this._historial = this._historial.splice(0, 10);
    }
    // if (this._historial.length > 10) {
    //   this._historial.pop();
    // }
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=jdrNJ1pN6133kTve7aeNrVuQLTNRJgOh&q=${value}&limit=10` )
    .subscribe( (resp : any) => {
      console.log(resp.data)
      this.results = resp.data
    })
  }
  removeGifs() {
    this._historial = [];
  }
}
