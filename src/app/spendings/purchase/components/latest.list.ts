import {Component, OnInit} from '@angular/core';
import {Purchase} from '../services/data';
import {PurchaseService} from '../services/service';

@Component({
    selector: 'purchase-latest-list',
    templateUrl: 'latest.list.html'
})
export class PurchaseLatestList implements OnInit {

    public request: Promise<Purchase[]>;

    constructor(
        private readonly service: PurchaseService
    ) { }

    public ngOnInit(): void {
        this.request = this.service.selectLatest();
    }

}
