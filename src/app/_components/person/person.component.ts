import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IPerson } from 'src/app/_models/person';
import { PersonService } from 'src/app/_services/person.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  people: IPerson[] = [
    { id: '1', name: 'John', surname: 'Smith', age: 25, country: 'Germany', phone: '071-998-875' },
    { id: '1', name: 'John', surname: 'Smith', age: 25, country: 'Germany', phone: '071-998-875' },
    { id: '1', name: 'John', surname: 'Smith', age: 25, country: 'Germany', phone: '071-998-875' },
    { id: '1', name: 'John', surname: 'Smith', age: 25, country: 'Germany', phone: '071-998-875' },
    { id: '1', name: 'John', surname: 'Smith', age: 25, country: 'Germany', phone: '071-998-875' },
    { id: '1', name: 'John', surname: 'Smith', age: 25, country: 'Germany', phone: '071-998-875' }
  ];

  form!: FormGroup;
  age: number[] = [];

  constructor(
    fb: FormBuilder,
    private personService: PersonService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.form = fb.group({
      id: [''],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: [null, Validators.required],
      country: ['', Validators.required],
      phone: ['']
    })
  }

  ngOnInit() {
    for (let i = 10; i < 100; i++) {
      this.age.push(i);
    }
  }

  save() {
    if (this.form.valid) {
      // this.personService.addTicket(this.form.value, (resp: boolean) => {
      //   if (resp)
      //     this.snackBar.open('Successfully Inserted!', '', {
      //       duration: 2000,
      //       horizontalPosition: 'right',
      //       verticalPosition: 'top',
      //     });
      // });
    }
  }

  update() {
    if (this.form.valid) {

    }
  }

  edit(person: IPerson) {
    this.form.setValue({
      id: person.id,
      name: person.name,
      surname: person.surname,
      age: person.age,
      country: person.country,
      phone: person.phone
    })
  }

  deleteModal(id: string) {
    this.dialog.open(DeleteDialogComponent, {
      data: {
        id: id
      },
      height: '190px',
      width: '300px',
    });
  }

  clear() {
    this.form.reset();
  }
}
