import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    return data ? (JSON.parse(data) as T) : null;
  }

  getAll<T>(path: string): T[] {
    return Object.keys(localStorage)
      .filter((k) => k.startsWith(path))
      .map((k) => localStorage.getItem(k))
      .filter(isNotNull)
      .map((d) => JSON.parse(d) as T);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}

function isNotNull<T>(value: T | null): value is T {
  return value !== null;
}
