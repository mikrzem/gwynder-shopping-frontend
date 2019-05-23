import {Component, EventEmitter, Output} from '@angular/core';
import {IncomeSource} from '../services/data';
import {IncomeSourceService} from '../services/service';

@Component({
    selector: 'income-source-create',
    templateUrl: 'create.html'
})
export class IncomeSourceCreate {

    @Output() public closed = new EventEmitter<IncomeSource>();

    public incomeSource: IncomeSource = {
        name: null
    };

    public saving: boolean = false;

    public error: string = null;

    constructor(
        private readonly service: IncomeSourceService
    ) { }

    public async save() {
        if (!this.incomeSource.name) {
            this.error = 'Name is required';
            return;
        }
        this.error = null;
        this.saving = true;
        try {
            const saved = await this.service.save(this.incomeSource);
            this.incomeSource = {
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
