import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatExpansionModule,
    MatGridListModule, MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule, MatSelectModule, MatSidenavModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
      CommonModule,
      BrowserAnimationsModule,

      MatButtonModule,
      MatMenuModule,
      MatAutocompleteModule,
      MatCheckboxModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatInputModule,
      // MatRadioModule,
      // MatSliderModule,
      // MatSlideToggleModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatGridListModule,
      MatCardModule,
      MatTabsModule,
      MatButtonToggleModule,
      MatChipsModule,
      MatIconModule,
      // MatProgressSpinnerModule,
      // MatProgressBarModule,
      MatDialogModule,
      MatTooltipModule,
      MatSnackBarModule,
      MatTableModule,
      MatSortModule,
      MatExpansionModule,
      // MatPaginatorModule,
      MatSelectModule,
  ],
  declarations: [ ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatMenuModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatInputModule,
        // MatRadioModule,
        // MatSelectModule,
        // MatSliderModule,
        // MatSlideToggleModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatTabsModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatIconModule,
        // MatProgressSpinnerModule,
        // MatProgressBarModule,
        MatDialogModule,
        MatTooltipModule,
        // MatSnackBarModule,
        MatTableModule,
        MatSortModule,
        // MatPaginatorModule,
        MatExpansionModule,
        MatSelectModule,
    ],
})
export class MaterialsModule { }
