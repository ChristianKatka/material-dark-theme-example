import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
  ],
})
export class MaterialModule {}
