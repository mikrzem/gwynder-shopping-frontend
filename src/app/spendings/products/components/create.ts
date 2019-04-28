import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SpendingCategory} from '../../categories/services/data';
import {Product} from '../services/data';
import {ProductService} from '../services/service';

@Component({
    selector: 'product-create',
    templateUrl: 'create.html'
})
export class ProductCreate {

    @Output() public closed = new EventEmitter<Product>();

    public product: Product = {
        category: null,
        name: null
    };

    public saving: boolean = false;

    public error: string = null;

    constructor(
        private readonly service: ProductService
    ) { }

    private _parentCategory: SpendingCategory = null;

    @Input() set parentCategory(category: SpendingCategory) {
        this._parentCategory = category;
        if (!this.product.category) {
            this.product.category = category;
        }
    }

    public async save() {
        if (!this.product.name) {
            this.error = 'Name is required';
            return;
        }
        if (!this.product.category) {
            this.error = 'Category is required';
            return;
        }
        this.error = null;
        this.saving = true;
        try {
            const saved = await this.service.save(this.product);
            this.product = {
                category: this._parentCategory,
                name: null
            };
            this.closed.emit(saved);
        } catch (ex) {
            this.error = 'Failed to create this category';
        }
        this.saving = false;
    }

    public cancel() {
        this.closed.emit(null);
    }

}
