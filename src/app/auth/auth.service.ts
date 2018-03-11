import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { User } from '../models/user';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService {
  user: Observable<User>;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user = this.afAuth.authState.switchMap(user => {
      console.log(user);
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider).then(credentials => {
      const user = credentials.user;
      this.afs
        .collection<User>('users', ref => ref.where('email', '==', user.email))
        .valueChanges()
        .subscribe(data => {
          if (!data.length) {
            const newUser = {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoUrl: user.photoURL,
              role: 'customer'
            };
            this.afs
              .collection('users')
              .doc(user.uid)
              .set(newUser)
              .then(() => {
                this.router.navigate(['/']);
                return;
              });
          }
          this.router.navigate(['/']);
        });
    });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  emailAndPassword(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email.value, password.value);
  }

  signUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  signOut() {
    console.log('saliendo');
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/otraRuta']);
      this.user = Observable.of(null);
    });
  }
}
