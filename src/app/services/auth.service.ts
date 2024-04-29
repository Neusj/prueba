import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, authState} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) { }

  login(mail: string, password: string){
     return signInWithEmailAndPassword(this.auth, mail, password);
  }

  logout(){
    return signOut(this.auth);
  }

  createUser(mail: string, password: string){
    return createUserWithEmailAndPassword(this.auth, mail, password);
  }

  stateUser(){
    return authState(this.auth);
  }
}
