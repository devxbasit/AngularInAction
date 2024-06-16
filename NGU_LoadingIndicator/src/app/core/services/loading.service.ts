import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingIndicatorSubject = new BehaviorSubject<boolean>(false);
  public loadingIndicator$ = this.loadingIndicatorSubject.asObservable();

  public loadingOn() {
    this.loadingIndicatorSubject.next(true);
  }

  public loadingOff() {
    this.loadingIndicatorSubject.next(false);
  }
}
