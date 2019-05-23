import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseDataService} from '../../../common/services/service';
import {UrlService} from '../../../common/services/url';
import {Income} from './data';

@Injectable()
export class IncomeService extends BaseDataService<Income> {

    constructor(
        client: HttpClient,
        urlService: UrlService
    ) { super(client, urlService, 'earnings/incomes')}

    public selectLatest(): Promise<Income[]> {
        return this.client.get<Income[]>(this.url('latest')).toPromise();
    }

    public select(dateFrom: string, dateTo: string): Promise<Income[]> {
        const params = new HttpParams()
            .set('dateFrom', dateFrom)
            .set('dateTo', dateTo);
        return this.client.get<Income[]>(
            this.url(),
            {params: params}
        ).toPromise();
    }

}
