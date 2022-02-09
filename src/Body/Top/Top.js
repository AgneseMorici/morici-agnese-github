import './Top.css';
import {Selection} from './Selection/Selection';
import {Search} from './Search/Search';

export const Top = () => {
    return(
        <div className="formTop">
            <ul className="ulTop">
                <li className="liTop2">
                    <Selection/> 
                </li>
                <li className="liTop1">
                    <Search/>
                </li>
            </ul>
        </div>
    );
}