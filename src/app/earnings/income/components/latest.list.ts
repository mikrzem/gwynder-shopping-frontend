import {Component, OnInit} from '@angular/core';
import {Income} from '../services/data';
import {IncomeService} from '../services/service';

@Component({
    selector: 'income-latest-list',
    templateUrl: 'latest.list.html'
})
export class IncomeLatestList implements OnInit {

    public request: Promise<Income[]>;

    constructor(
        private readonly service: IncomeService
    ) { }

    public ngOnInit(): void {
        this.request = this.service.selectLatest();
    }

}
