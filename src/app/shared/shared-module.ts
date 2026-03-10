import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashboardCardComponentComponent } from './components/dashboard-card-component/dashboard-card-component.component';
import { TransactionDetailsComponent } from './components/Transactions/transaction-details/transaction-details.component';
import { TransactionFormComponent } from './components/Transactions/transaction-form/transaction-form.component';
import { TransactionItemComponent } from './components/Transactions/transaction-item/transaction-item.component';
import { CurrencyFormatPipe } from './Pipes/currency-format-pipe';
import { DateFormatPipe } from './Pipes/date-format-pipe';
import { CategoryColorPipe } from './Pipes/category-color-pipe';
import { CategoryIconPipe } from './Pipes/category-icon-pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { DateFieldComponent } from './components/Fields/date-field/date-field.component';
import { PhotoSelectorComponent } from './components/Photo/photo-selector/photo-selector.component';
import { FilterBarComponent } from './components/filter-bar-component/filter-bar-component.component';
import { SearchByTextPipe } from './Pipes/search-by-text-pipe';
import { FilterByCategoryPipe } from './Pipes/filter-by-category-pipe';
import { FilterByTypePipe } from './Pipes/filter-by-type-pipe';
import { PhotoPreviewComponent } from './components/Photo/photo-preview/photo-preview.component';
import { AmountDisplayComponent } from './components/amount-display/amount-display.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { CategoryBadgeComponent } from './components/Categories/category-badge/category-badge.component';
import { CategoryIconComponent } from './components/Categories/category-icon/category-icon.component';
import { ProgressBarCategoryComponent } from './components/progress-bar-category/progress-bar-category.component';
import { PhotoGalleryModalComponent } from './components/Photo/photo-gallery-modal/photo-gallery-modal.component';


@NgModule({
  declarations: [DashboardCardComponentComponent,TransactionDetailsComponent, TransactionItemComponent, TransactionFormComponent, CurrencyFormatPipe,
    DateFormatPipe, CategoryColorPipe, CategoryIconPipe, DateFieldComponent, PhotoSelectorComponent, FilterBarComponent, SearchByTextPipe,PhotoPreviewComponent,
    FilterByCategoryPipe,FilterByTypePipe,AmountDisplayComponent,EmptyStateComponent,CategoryBadgeComponent,CategoryIconComponent,ProgressBarCategoryComponent,
    PhotoGalleryModalComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule

  ],
  exports: [
    DashboardCardComponentComponent,
    DateFieldComponent,
    TransactionFormComponent,
    TransactionItemComponent,
    CurrencyFormatPipe,
    DateFormatPipe,
    CategoryColorPipe,
    CategoryIconPipe,
    PhotoSelectorComponent,
    FilterBarComponent,
    SearchByTextPipe,
    FilterByCategoryPipe,
    FilterByTypePipe,
    PhotoPreviewComponent,
    AmountDisplayComponent,
    EmptyStateComponent,
    CategoryBadgeComponent,
    CategoryIconComponent,
    ProgressBarCategoryComponent,
    PhotoGalleryModalComponent,

  ],

  
})
export class SharedModule { }
