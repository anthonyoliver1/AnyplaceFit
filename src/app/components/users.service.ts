import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject, Subject } from 'rxjs';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, get, ref, child } from "firebase/database";
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public _storage: Storage | null = null;
  public data: any = []
  public dataUserInfo: any = []
  public dataPersonal: any = null
  public database = getDatabase();

  public handlerDataPersonal: BehaviorSubject<any> = new BehaviorSubject(this.dataPersonal)

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public writeUserData(cpfUser, name, surname, email, cpfUserNoFomatter) {
    localStorage.setItem('CPF', cpfUserNoFomatter)
    localStorage.setItem('NAME', name)
    localStorage.setItem('SURNAME', surname)
    localStorage.setItem('EMAIL', email)
    const db = this.database;
    set(ref(db, 'users/' + cpfUser), {
      username: name,
      surname: surname,
      email: email,
      cpf: cpfUser
    });
  }

  public getUserData() {
    let cpfUser = localStorage.getItem('CPF').replace(/[^0-9]/g, "")
    const dbRef = ref(this.database);

    get(child(dbRef, `users/${cpfUser}`)).then((snapshot) => {
      if (snapshot.exists()) {
        this.dataUserInfo = snapshot.val()
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
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
      console.log(response);
      
    return response
  }

  public async createAccount(email, password) {
    const auth = getAuth();

    const response = await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return userCredential
      })
      .catch((error) => {
        return error
      });
    return response;
  }


  public getAuthentication() {
    const auth = getAuth();
    this.dataUserInfo = auth.currentUser.email;
    console.log(auth.currentUser);
    console.log(auth);
  }

}
