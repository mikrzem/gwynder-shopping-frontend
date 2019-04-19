import {BaseData} from '../../../common/services/data';
import {SpendingCategory} from '../../categories/services/data';
import {SpendingLocation} from '../../locations/services/data';
import {Product} from '../../products/services/data';

export interface PurchaseProduct {

    product: Product;
    amount: number;
    price: number;

}

export interface Purchase extends BaseData {

    location: SpendingLocation;
    category: SpendingCategory;
    date: string;
    manualTotal: boolean;
    total: number;
    products: PurchaseProduct[];

}
