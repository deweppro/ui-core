import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage: any = null;
  private name = 'localStorage';

  constructor() {
    this.storageAvailable(this.name);
  }

  private storageAvailable(type: any): boolean {
    try {
      this.storage = window[type];
      const x = '__x__';
      this.storage.setItem(x, x);
      this.storage.removeItem(x);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  clear(): void {
    if (this.storage !== null) {
      this.storage.clear();
    }
  }

  get(key: string, defaut: string): string {
    if (this.storage === null) {
      return defaut;
    }
    const v = this.storage.getItem(key);
    if (v === null || v.length === 0) {
      return defaut;
    }
    return v;
  }

  del(key: string): void {
    if (this.storage !== null) {
      this.storage.removeItem(key);
    }
  }

  set(key: string, value: string): void {
    if (this.storage !== null) {
      this.storage.setItem(key, value);
    }
  }
}
