import React, {useEffect, useState} from 'react';
import {infoAPI} from "../../api/api";
import s from './InfoPageAll.module.css'
import TableComponent from "../TableComponent/TableComponent";
import Moment from "moment";


const InfoPage = () => {
    const [rocketList, setRocketList] = useState([])


    useEffect(() => {
        infoAPI.getAll()
            .then(res => {
                setRocketList(
                    res.filter(
                        obj => 2015<= Number(Moment(obj.date_local).format('YYYY')) && Number(Moment(obj.date_local).format('YYYY'))<=2019 && obj.success == true
                    )
            );
            })
    }, [])


    return (
        <div className={s.mainWindow}>
            <TableComponent rocketList={rocketList} setRocketList={setRocketList}/>
        </div>

    );
}

export default InfoPage;