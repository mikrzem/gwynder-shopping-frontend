import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseDataService} from '../../../common/services/service';
import {UrlService} from '../../../common/services/url';
import {Purchase} from './data';

@Injectable()
export class PurchaseService extends BaseDataService<Purchase> {

    constructor(
        client: HttpClient,
        urlService: UrlService
    ) { super(client, urlService, 'spendings/purchases')}

    public selectLatest(): Promise<Purchase[]> {
        return this.client.get<Purchase[]>(
            this.url('latest')
        ).toPromise();
    }

    public select(dateFrom: string, dateTo: string): Promise<Purchase[]> {
        const params = new HttpParams()
            .set('dateFrom', dateFrom)
            .set('dateTo', dateTo);
        return this.client.get<Purchase[]>(
            this.url(),
            {params: params}
        ).toPromise();
    }

}
