import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule, DropdownModule} from 'primeng/primeng';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DateSelect} from './common/components/date.select';
import {UrlService} from './common/services/url';
import {IncomeCreate} from './earnings/income/components/create';
import {IncomeDisplay} from './earnings/income/components/display';
import {IncomeEdit} from './earnings/income/components/edit';
import {IncomeLatestList} from './earnings/income/components/latest.list';
import {IncomeList} from './earnings/income/components/list';
import {IncomeUpdate} from './earnings/income/components/update';
import {IncomeService} from './earnings/income/services/service';
import {IncomeSourceCreate} from './earnings/sources/components/create';
import {IncomeSourceSelect} from './earnings/sources/components/select';
import {IncomeSourceService} from './earnings/sources/services/service';
import {Error404Page} from './main/error.404';
import {StartPage} from './main/start.page';
import {CategoryCreate} from './spendings/categories/components/create';
import {CategorySelect} from './spendings/categories/components/select';
import {SpendingCategoryService} from './spendings/categories/services/service';
import {LocationCreate} from './spendings/locations/components/create';
import {LocationSelect} from './spendings/locations/components/select';
import {SpendingLocationService} from './spendings/locations/services/service';
import {ProductCreate} from './spendings/products/components/create';
import {ProductSelect} from './spendings/products/components/select';
import {ProductService} from './spendings/products/services/service';
import {PurchaseCreate} from './spendings/purchase/components/create';
import {PurchaseDisplay} from './spendings/purchase/components/display';
import {PurchaseEdit} from './spendings/purchase/components/edit';
import {PurchaseLatestList} from './spendings/purchase/components/latest.list';
import {PurchaseList} from './spendings/purchase/components/list';
import {PurchaseUpdate} from './spendings/purchase/components/update';
import {PurchaseService} from './spendings/purchase/services/service';

@NgModule({
    declarations: [
        AppComponent,
        Error404Page,
        StartPage,
        PurchaseLatestList,
        PurchaseList,
        PurchaseDisplay,
        PurchaseCreate,
        PurchaseEdit,
        PurchaseUpdate,
        DateSelect,
        LocationSelect,
        LocationCreate,
        CategorySelect,
        CategoryCreate,
        ProductSelect,
        ProductCreate,
        IncomeSourceCreate,
        IncomeSourceSelect,
        IncomeDisplay,
        IncomeList,
        IncomeLatestList,
        IncomeEdit,
        IncomeCreate,
        IncomeUpdate,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        DropdownModule,
        CalendarModule,
    ],
    providers: [
        UrlService,
        SpendingCategoryService,
        SpendingLocationService,
        ProductService,
        PurchaseService,
        IncomeSourceService,
        IncomeService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
