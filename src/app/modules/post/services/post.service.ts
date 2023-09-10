import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  searchedWord = new Subject<any>();
  constructor() {}

  sendSearchedWord(word: any) {
    this.searchedWord.next(word);
  }
}
  