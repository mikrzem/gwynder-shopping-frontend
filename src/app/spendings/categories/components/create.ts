import {Component, EventEmitter, Output} from '@angular/core';
import {SpendingCategory} from '../services/data';
import {SpendingCategoryService} from '../services/service';

@Component({
    selector: 'category-create',
    templateUrl: 'create.html'
})
export class CategoryCreate {

    @Output() public closed = new EventEmitter<SpendingCategory>();

    public category: SpendingCategory = {
        parent: null,
        name: null
    };

    public saving: boolean = false;

    public error: string = null;

    constructor(
        private readonly service: SpendingCategoryService
    ) { }

    public async save() {
        if (!this.category.name) {
            this.error = 'Name is required';
            return;
        }
        this.error = null;
        this.saving = true;
        try {
            const saved = await this.service.save(this.category);
            this.category = {
                parent: null,
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
