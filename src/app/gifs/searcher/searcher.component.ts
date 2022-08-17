import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
})
export class SearcherComponent {
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;
  @ViewChild('valen') valen!: ElementRef<HTMLButtonElement>;

  constructor(private gifsService: GifsService) {}
  search() {
    let value = this.txtSearch.nativeElement.value;

    if (value.trim().length > 0) {
      this.gifsService.searchGifs(value);
    }

    this.txtSearch.nativeElement.value = '';
  }
  remove() {
    this.gifsService.removeGifs();
  }
  printValen() {
    console.log(this.valen.nativeElement.value);
  }
}
