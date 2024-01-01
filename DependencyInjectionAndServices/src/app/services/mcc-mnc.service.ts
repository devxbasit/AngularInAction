import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MccMncService {

  constructor() { }

  getMccMnc() {
    return [
      { id: 1, MccMnc: 404001 },
      { id: 2, MccMnc: 404002 },
      { id: 3, MccMnc: 404003 }]
  }
}
