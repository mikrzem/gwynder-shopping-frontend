import {Component, EventEmitter, Output} from '@angular/core';
import {SpendingLocation} from '../services/data';
import {SpendingLocationService} from '../services/service';

@Component({
    selector: 'location-create',
    templateUrl: 'create.html'
})
export class LocationCreate {

    @Output() public closed = new EventEmitter<SpendingLocation>();

    public location: SpendingLocation = {
        name: null
    };

    public saving: boolean = false;

    public error: string = null;

    constructor(
        private readonly service: SpendingLocationService
    ) { }

    public async save() {
        if (!this.location.name) {
            this.error = 'Name is required';
            return;
        }
        this.error = null;
        this.saving = true;
        try {
            const saved = await this.service.save(this.location);
            this.location = {
                name: null
            };
            this.closed.emit(saved);
        } catch (ex) {
            this.error = 'Failed to create this location';
        }
        this.saving = false;
    }

    public cancel() {
        this.closed.emit(null);
    }

}
