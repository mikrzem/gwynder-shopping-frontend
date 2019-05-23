import {BaseData} from '../../../common/services/data';
import {IncomeSource} from '../../sources/services/data';

export interface Income extends BaseData {

    source: IncomeSource;
    date: string;
    income: number;

}
