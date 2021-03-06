import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css']
})
export class DialogWindowComponent implements OnInit {

  dialogMessage: string;

  constructor(
      private dialogRef: MatDialogRef<DialogWindowComponent>,
      @Inject(MAT_DIALOG_DATA) data
  ) {
    this.dialogMessage = data.dialogMessage;
  }

  ngOnInit() {
  }

  close(reroute: boolean) {
    this.dialogRef.close(reroute);
  }

}
