import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {DropdownModule} from 'primeng/primeng';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UrlService} from './common/services/url';
import {Error404Page} from './main/error.404';
import {StartPage} from './main/start.page';
import {SpendingCategoryService} from './spendings/categories/services/service';
import {SpendingLocationService} from './spendings/locations/services/service';
import {ProductService} from './spendings/products/services/service';
import {PurchaseLatestList} from './spendings/purchase/components/latest.list';
import {PurchaseList} from './spendings/purchase/components/list';
import {PurchaseService} from './spendings/purchase/services/service';

@NgModule({
    declarations: [
        AppComponent,
        Error404Page,
        StartPage,
        PurchaseLatestList,
        PurchaseList,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        DropdownModule,
    ],
    providers: [
        UrlService,
        SpendingCategoryService,
        SpendingLocationService,
        ProductService,
        PurchaseService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
