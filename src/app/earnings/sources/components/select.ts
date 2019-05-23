import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SpendingLocationService} from '../../../spendings/locations/services/service';
import {IncomeSource} from '../services/data';
import {IncomeSourceService} from '../services/service';

@Component({
    selector: 'income-source-select',
    templateUrl: 'select.html'
})
export class IncomeSourceSelect implements OnInit {

    public editMode = false;

    public request: Promise<IncomeSource[]>;

    @Output() public sourceChange = new EventEmitter<IncomeSource>();

    constructor(
        private readonly service: IncomeSourceService
    ) { }

    private _current: IncomeSource = null;

    get current() {
        return this._current;
    }

    set current(location: IncomeSource) {
        this._current = location;
        this.sourceChange.emit(location);
    }

    @Input() set source(source: IncomeSource) {
        this._current = source;
    }

    public compareSources = (l1: IncomeSource, l2: IncomeSource) => {
        return (!l1 && !l2) || (l1 && l2 && l1.id === l2.id);
    };

    public ngOnInit(): void {
        this.loadList();
    }

    public closeEdit(source: IncomeSource) {
        this.current = source;
        this.editMode = false;
        this.loadList();
    }

    private loadList() {
        this.request = this.service.selectAll();
    }
}
