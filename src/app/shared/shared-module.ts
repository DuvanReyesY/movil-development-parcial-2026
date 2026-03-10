import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashboardCardComponentComponent } from './components/dashboard-card-component/dashboard-card-component.component';
import { TabsComponent } from './components/tabs/tabs.component';
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
import { PhotoGalleryModal } from './components/Photo/photo-gallery-modal/photo-gallery-modal.component';
import { PhotoPreviewComponent } from './components/Photo/photo-preview/photo-preview.component';


@NgModule({
  declarations: [DashboardCardComponentComponent, TabsComponent, TransactionDetailsComponent, TransactionItemComponent, TransactionFormComponent, CurrencyFormatPipe,
    DateFormatPipe, CategoryColorPipe, CategoryIconPipe, DateFieldComponent, PhotoSelectorComponent, FilterBarComponent, SearchByTextPipe,PhotoPreviewComponent,PhotoGalleryModal,
    FilterByCategoryPipe,
    FilterByTypePipe,TabsComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule

  ],
  exports: [
    DashboardCardComponentComponent,
    TabsComponent,
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
    PhotoGalleryModal,
    PhotoPreviewComponent,
    TabsComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
