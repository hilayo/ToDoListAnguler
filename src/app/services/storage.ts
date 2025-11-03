import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() { }
  getData(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
