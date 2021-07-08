import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonService } from 'src/app/_services/person.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public person: { id: string },
    private personService: PersonService,
  ) {

  }

  ngOnInit(): void {
  }

  delete() {

  }

  close() {
    this.dialog.closeAll();
  }
}
