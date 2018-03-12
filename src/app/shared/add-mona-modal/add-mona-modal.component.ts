import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var Materialize: any;

@Component({
  selector: 'app-add-mona-modal',
  templateUrl: './add-mona-modal.component.html',
  styleUrls: ['./add-mona-modal.component.scss']
})
export class AddMonaModalComponent implements OnInit {
  number: number;
  count: number;

  constructor() {}

  ngOnInit() {
    $('.modal').modal();
    this.number = null;
    this.count = null;
    Materialize.updateTextFields();
  }

  closeModal(): void {
    this.number = null;
    this.count = null;

    $('.modal').close();
  }

  addMona(): void {
    this.number = null;
    this.count = null;
  }
}
