import React, {useState} from 'react';
import Moment from "moment";
import s from'../TableComponent/TableComponent.module.css'


const TableComponent = ({rocketList,setRocketList}) => {
    const [myBool, setMyBool]=useState(true)

    const onSort =()=>{
        let aa,bb
        const data = rocketList;
        if (myBool) {
            aa=-1
            bb=1
        }
        else  {
            aa=1
            bb=-1
        }
        data.sort((a,b) => {
                if (Moment(a.date_local) > Moment(b.date_local))
                { return aa} else {
                    if (Moment(a.date_local) == Moment(b.date_local))
                    { return 0} else
                    {return bb}
                }
            }
        )
    }
    onSort();
    return (
        <table  className={"table "+s.mainTab}>
            <thead>
            <tr>
                <th scope="col">Картинка</th>
                <th scope="col">Название миссии</th>
                <th onClick={() => {setMyBool(!myBool); onSort()}} scope="col">Дата запуска {myBool? '↓': '↑'}</th>
                <th scope="col">Инфомация</th>

            </tr>
            </thead>
            <tbody>
            {rocketList.map((data) =>
                <tr key={data.id}>
                    <td><img src={data.links.patch.small} alt="No photo"/></td>
                    <td>{data.name}</td>
                    <td>{Moment(data.date_local).format('DD.MM.YYYY HH:mm')}</td>
                    <td>{data.details}</td>

                </tr>
            )}
            </tbody>
        </table>
    );
}

export default TableComponent;