import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonaComponent } from './mona/mona.component';
import { AddMonaBtnComponent } from './add-mona-btn/add-mona-btn.component';
import { AddMonaModalComponent } from './add-mona-modal/add-mona-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [MonaComponent, AddMonaBtnComponent, AddMonaModalComponent],
  exports: [MonaComponent, AddMonaBtnComponent, AddMonaModalComponent]
})
export class SharedModule {}