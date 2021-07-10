import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IPerson } from '../_models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private db: AngularFirestore
  ) { }

  getPeople() {
    return this.db.collection('people').valueChanges();
  }

  savePerson(person: IPerson) {
    person.id = this.generateGUID();
    return this.db.collection('people').add(person);
  }

  updatePerson(person: IPerson) {
    return this.db.collection('people').doc(person.id).update(person);
  }

  generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
