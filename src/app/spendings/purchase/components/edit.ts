import {Location} from '@angular/common';
import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Purchase, PurchaseProduct} from '../services/data';
import {PurchaseService} from '../services/service';

@Component({
    selector: 'purchase-edit',
    templateUrl: 'edit.html'
})
export class PurchaseEdit {

    @Input() public purchase: Purchase;

    public saving: boolean = false;

    public error: string = null;

    public nextProduct: PurchaseProduct = this.newPurchaseProduct();

    constructor(
        private readonly service: PurchaseService,
        private readonly location: Location,
        private readonly router: Router
    ) { }

    get total(): number {
        if (this.purchase.manualTotal) {
            return this.purchase.total;
        } else {
            return this.productTotal;
        }
    }

    set total(total: number) {
        this.purchase.total = total;
    }

    get manual() {
        return this.purchase.manualTotal;
    }

    set manual(manual: boolean) {
        this.purchase.manualTotal = manual;
        this.purchase.total = this.productTotal;
    }

    private get productTotal(): number {
        return this.purchase.products
            .map(prod => (prod.price || 0) * (prod.amount || 1))
            .reduce((acc, val) => acc + val, 0);
    }

    public async save() {
        this.error = null;
        this.saving = true;
        try {
            const saved = await this.service.save(this.purchase);
            await this.router.navigate(['/purchase', 'update', saved.id], {
                queryParams: {
                    success: true
                }
            })
        } catch (ex) {
            console.error(ex);
            this.error = 'Failed to save purchase';
        }
        this.saving = false;
    }

    public cancel() {
        this.location.back();
    }

    public addNextProduct() {
        if (this.nextProduct.product && this.nextProduct.amount && this.nextProduct.price) {
            this.purchase.products.push(
                this.nextProduct
            );
            this.nextProduct = this.newPurchaseProduct();
        }
    }

    private newPurchaseProduct(): PurchaseProduct {
        return {
            product: null,
            amount: 1,
            price: null
        };
    }
}
