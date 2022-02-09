import './Body.css'; 
import { Top } from './Top/Top';
import { Pages } from './Pages/Pages';
import { Table } from './ListTable/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';


export const Body = () => {

    const [repos, setRepos] = useState(false);

    useEffect(() => {



        const result =  axios.get('https://github-function-app.azurewebsites.net/api/HttpStudentsRepos')



            .then(res => {


                console.log(res)
                setRepos(res.data.results)
 


            })



    }, [])



    const handleLoadClick = () => {



        setRepos(false);



    }
    return (



        <div className="formBody">

            <div className="forBody">

                <div className="TotRepos">


                </div>

                <div className="buttondiv">

                    <button className="updatebutton" onClick={() =>

                        handleLoadClick()}>

                        <b>Update</b>

                        <i className="fa fa-repeat"></i>

                    </button>

                </div>

                <Table dataRepositorie={repos} />

            </div>

        </div>

    );
}
