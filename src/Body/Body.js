import './Body.css'; 
import {Top} from './Top/Top';
import {Pages} from './Pages/Pages';
import {Table} from './Table/Table';
import { TopRepos } from './Top/TopRepos/TopRepos';


export const Body = () => {
    return(
        <div className="formBody">
            <Top/>
            <Table/>
            <Pages/>
            <TopRepos/>
        </div>
    );
}