import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SongDataService {
  public songData: Subject<any> = new Subject();
}
