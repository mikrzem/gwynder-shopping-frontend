import {HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {PageRequest} from './paging';

@Injectable()
export class UrlService {

    public buildUrl(...parts: any[]): string {
        return environment.apiUrl + parts.map(part => part.toString()).join('/');
    }

    public pageParams(request: PageRequest, params?: HttpParams): HttpParams {
        params = params || new HttpParams();
        params = params.set('page', request.page.toString(10));
        params = params.set('pageSize', request.pageSize.toString(10));
        params = params.set('oldestFirst', request.oldestFirst ? 'true' : 'false');
        return params;
    }

}
