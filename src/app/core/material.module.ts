import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule,
  MatListModule, MatToolbarModule, MatCardModule, MatInputModule, MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatInputModule,MatSelectModule],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatInputModule, MatSelectModule],
})
export class CustomMaterialModule { }
