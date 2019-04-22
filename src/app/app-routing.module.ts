import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Error404Page} from './main/error.404';
import {StartPage} from './main/start.page';
import {PurchaseCreate} from './spendings/purchase/components/create';
import {PurchaseUpdate} from './spendings/purchase/components/update';

const routes: Routes = [
    {path: 'purchase/create', component: PurchaseCreate},
    {path: 'purchase/update/:id', component: PurchaseUpdate},
    {path: 'main', component: StartPage},
    {path: '', pathMatch: 'full', redirectTo: '/main'},
    {path: '**', component: Error404Page},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
