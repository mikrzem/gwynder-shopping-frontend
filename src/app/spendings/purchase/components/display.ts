import {Component, Input} from '@angular/core';
import {SpendingCategoryService} from '../../categories/services/service';
import {Purchase} from '../services/data';

@Component({
    selector: 'purchase-display',
    templateUrl: 'display.html'
})
export class PurchaseDisplay {

    @Input() public purchase: Purchase;

    constructor(
        private readonly categoryService: SpendingCategoryService
    ) { }

    get category(): string {
        if (!this.purchase || !this.purchase.category) {
            return '';
        }
        return this.categoryService.display(this.purchase.category);
    }

    get productPrice() {
        if (!this.purchase && this.purchase.products.length === 0) {
            return 0;
        }
        return this.purchase.products.map(p => p.price).reduce((acc, amount) => acc + amount) || 0;
    }

    get otherPrice() {
        return this.purchase.total - this.productPrice;
    }

    get showOther(): boolean {
        if (!this.purchase.manualTotal) {
            return false;
        }
        if (this.purchase.products.length === 0) {
            return false;
        }
        return this.totalMismatch;
    }

    get showSum(): boolean {
        if (this.purchase.products.length > 1) {
            return true;
        }
        return this.totalMismatch;
    }

    private get totalMismatch() {
        return Math.abs(this.otherPrice) < 0.01;
    }
}
