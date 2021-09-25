import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject, Subject } from 'rxjs';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public _storage: Storage | null = null;
  public data: any = []
  public dataUserInfo: any = []
  public dataPersonal: any = null

  public handlerDataPersonal: BehaviorSubject<any> = new BehaviorSubject(this.dataPersonal)

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: any, value: any) {
    this._storage?.set(key, value);
    this.data.push({ key, value })
  }

  public get(key: string) {
    let data = this.data.find(i => i.key.includes(key))
    return data
  }

  public async login(email, password) {
    const auth = getAuth();
    let response = null

    response = await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sessionStorage.setItem("login", JSON.stringify(user))
        return user
      })
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
      
    console.log("response", response);
    return response
  }

  public createAccount(email, password) {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userCredential", userCredential);
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }


  public getAuthentication() {
    const auth = getAuth();
    console.log(auth.currentUser);
    console.log(auth);
  }

}
