import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPerson } from '../_models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  itemsCollection!: AngularFirestoreCollection<IPerson>;
  items$: Observable<IPerson[]>;
  itemDocument!: AngularFirestoreDocument<IPerson>;

  constructor(
    private db: AngularFirestore
  ) {
    this.itemsCollection = db.collection('people');

    this.items$ = db.collection('people').snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as IPerson;
            data.id = a.payload.doc.id;
            return data;
          })
        })
      );
  }

  getPeople() {
    return this.items$;
  }

  addPerson(person: IPerson) {
    this.itemsCollection.add(person);
  }

  updatePerson(person: IPerson) {
    this.itemDocument = this.db.doc(`people/${person.id}`);
    this.itemDocument.update(person);
  }

  deletePerson(personId: string) {
    this.itemDocument = this.db.doc(`people/${personId}`);
    this.itemDocument.delete();
  }
}
