import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  put(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  delete(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
