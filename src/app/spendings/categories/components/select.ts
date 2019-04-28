import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SpendingCategory} from '../services/data';
import {SpendingCategoryService} from '../services/service';

@Component({
    selector: 'category-select',
    templateUrl: 'select.html'
})
export class CategorySelect implements OnInit {

    public editMode = false;

    public request: Promise<SpendingCategory[]>;

    @Output() public categoryChange = new EventEmitter<SpendingCategory>();

    @Input() public allowEdit = true;

    constructor(
        private readonly service: SpendingCategoryService
    ) { }

    private _current: SpendingCategory = null;

    get current() {
        return this._current;
    }

    set current(location: SpendingCategory) {
        this._current = location;
        this.categoryChange.emit(location);
    }

    @Input() set category(category: SpendingCategory) {
        this._current = category;
    }

    public compareCategory = (l1: SpendingCategory, l2: SpendingCategory) => {
        return (!l1 && !l2) || (l1 && l2 && l1.id === l2.id);
    };

    public ngOnInit(): void {
        this.loadList();
    }

    public closeEdit(category: SpendingCategory) {
        this.current = category;
        this.editMode = false;
        this.loadList();
    }

    private loadList() {
        this.request = this.service.selectAll();
    }

    public display(category: SpendingCategory) {
        return this.service.display(category);
    }
}
