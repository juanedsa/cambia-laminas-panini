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

  userId: string;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user = this.afAuth.authState.switchMap(user => {
      if (user) {
        this.userId = user.uid;
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
              userName: this.makeUserName(user),
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

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
      this.user = Observable.of(null);
    });
  }

  private makeUserName(user): string {
    if (user.email) {
      return user.email.split('@')[0];
    } else {
      return user.displayName
        .trim()
        .replace(' ', '')
        .toLowerCase();
    }
  }
}
