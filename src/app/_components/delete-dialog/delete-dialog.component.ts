import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonService } from 'src/app/_services/person.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public person: { id: string },
    private personService: PersonService,
    private snackBar: MatSnackBar
  ) { }

  deletePerson() {
    this.personService.deletePerson(this.person.id);

    this.snackBar.open('Successfully deleted!', '', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });

    this.close();
  }

  close() {
    this.dialog.closeAll();
  }
}
