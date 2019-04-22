import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SpendingLocation} from '../services/data';
import {SpendingLocationService} from '../services/service';

@Component({
    selector: 'location-select',
    templateUrl: 'select.html'
})
export class LocationSelect implements OnInit {

    public editMode = false;

    public request: Promise<SpendingLocation[]>;

    @Output() public locationChange = new EventEmitter<SpendingLocation>();

    constructor(
        private readonly service: SpendingLocationService
    ) { }

    private _current: SpendingLocation = null;

    get current() {
        return this._current;
    }

    set current(location: SpendingLocation) {
        this._current = location;
        this.locationChange.emit(location);
    }

    @Input() set location(location: SpendingLocation) {
        this._current = location;
    }

    public compareLocation = (l1: SpendingLocation, l2: SpendingLocation) => {
        return (!l1 && !l2) || (l1 && l2 && l1.id === l2.id);
    };

    public ngOnInit(): void {
        this.loadList();
    }

    private loadList() {
        this.request = this.service.selectAll();
    }

}
