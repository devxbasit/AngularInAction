import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  public getItem<T>(key: string): T | null {
    const data = localStorage.getItem(key);

    if (data != null) {
      try {
        return JSON.parse(data);
      } catch (error) {
        console.log('Parsing error: ', error);
        return null;
      }
    }

    return null;
  }

  public setItem(key: string, value: object | string): void {
    if (typeof value === 'string') {
      localStorage.setItem(key, value);
      return;
    }

    localStorage.setItem(key, JSON.stringify(value));
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }
}
