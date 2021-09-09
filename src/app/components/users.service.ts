import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public _storage: Storage | null = null;
  public data: any = []
  public dataUserInfo: any = []

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }
  
  public set(key: any, value: any) {
    this._storage?.set(key, value);
    this.data.push({key, value})
  }
  
  public get(key: string){
    let data = this.data.find(i=>i.key.includes(key))
    return data
  }
}
