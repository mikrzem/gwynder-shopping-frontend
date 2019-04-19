import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseCatalogService} from '../../../common/services/service';
import {UrlService} from '../../../common/services/url';
import {SpendingCategory} from '../../categories/services/data';
import {Product} from './data';

@Injectable()
export class ProductService extends BaseCatalogService<Product> {

    constructor(
        client: HttpClient,
        urlService: UrlService
    ) { super(client, urlService, 'spendings/products')}

    public select(category?: SpendingCategory): Promise<Product[]> {
        if (category) {
            const params = new HttpParams().set('category', category.id.toString());
            return this.client.get<Product[]>(this.url(), {params: params}).toPromise();
        } else {
            return this.selectAll();
        }
    }

}
