import {Location} from '@angular/common';
import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Income} from '../services/data';
import {IncomeService} from '../services/service';

@Component({
    selector: 'income-edit',
    templateUrl: 'edit.html'
})
export class IncomeEdit {

    @Input() public income: Income;

    public saving: boolean = false;

    public error: string = null;

    constructor(
        private readonly service: IncomeService,
        private readonly location: Location,
        private readonly router: Router
    ) { }

    public async save() {
        this.error = null;
        this.saving = true;
        try {
            const saved = await this.service.save(this.income);
            await this.router.navigate(['/income', 'update', saved.id], {
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
}
