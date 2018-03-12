import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-add-mona-btn',
  templateUrl: './add-mona-btn.component.html',
  styleUrls: ['./add-mona-btn.component.scss']
})
export class AddMonaBtnComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  openModal(): void {
    $('#modal1').modal('open');
  }
}
