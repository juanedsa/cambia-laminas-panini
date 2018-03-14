import { AddMonaBtnComponent } from './add-mona-btn/add-mona-btn.component';
import { AddMonaModalComponent } from './add-mona-modal/add-mona-modal.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../common/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MonaComponent } from './mona/mona.component';
import { NgModule } from '@angular/core';
import { ProductService } from '../common/product.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [MonaComponent, AddMonaBtnComponent, AddMonaModalComponent, FooterComponent],
  exports: [MonaComponent, AddMonaBtnComponent, AddMonaModalComponent, FooterComponent],
  providers: [ProductService]
})
export class SharedModule {}
