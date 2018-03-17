import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {User} from '../models/user';
import {Product} from '../models/product';

type usersCollection = AngularFirestoreCollection<User[]>;
type userDocument = AngularFirestoreDocument<User>;

@Injectable()
export class UserService {
  constructor(private afs: AngularFirestore) {}

  users(): usersCollection {
    return this.afs.collection<User[]>('users');
  }

  save(user: User): Promise<any> {
    return this.users()
      .doc(user.uid)
      .set(Object.assign({}, user));
  }
}
