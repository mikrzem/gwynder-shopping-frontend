import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SpendingCategory} from '../../categories/services/data';
import {Product} from '../services/data';
import {ProductService} from '../services/service';

@Component({
    selector: 'product-select',
    templateUrl: 'select.html'
})
export class ProductSelect implements OnInit {

    public editMode = false;

    public request: Promise<Product[]>;

    @Output() public productChange = new EventEmitter<Product>();

    constructor(
        private readonly service: ProductService
    ) { }

    private _current: Product = null;

    get current() {
        return this._current;
    }

    set current(product: Product) {
        this._current = product;
        this.productChange.emit(product);
        if (product) {
            this.category = product.category;
        }
    }

    private _category: SpendingCategory = null;

    get category() {
        return this._category;
    }

    set category(category: SpendingCategory) {
        const prev = this._category;
        this._category = category;
        if (category && (!prev || prev.id !== category.id)) {
            this.loadList();
        }
    }

    private _parentCategory: SpendingCategory = null;

    @Input() set parentCategory(category: SpendingCategory) {
        if (!this.category && category) {
            this.category = category;
        }
        this._parentCategory = category;
    }

    @Input() set product(product: Product) {
        this._current = product;
        if (product) {
            this.category = product.category;
        }
    }

    public compareCategory = (l1: Product, l2: Product) => {
        return (!l1 && !l2) || (l1 && l2 && l1.id === l2.id);
    };

    public ngOnInit(): void {
        this.loadList();
    }

    public closeEdit(product: Product) {
        this.current = product;
        this.editMode = false;
        this.loadList();
    }

    private loadList() {
        if (this.category) {
            this.request = this.service.select(this.category);
        } else {
            this.request = Promise.resolve([]);
        }
    }
}
