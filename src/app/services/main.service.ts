import { Injectable } from '@angular/core';
import {data as DataInf} from './mockData'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  getDataFromLocalStorage(key: string): any[] {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

  updateLocalStorage(key: string, data: DataInf[]): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
