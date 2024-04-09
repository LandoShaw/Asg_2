import DriversItem from "./DriversItem";
import { useState, useContext } from 'react';
import { GlobalContext } from "../App";

const DriversTable = (props) => {
    let { raceDriverInformation
    } = useContext(GlobalContext);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th></th>
                        <th>Pts</th>
                        <th>Wins</th>
                    </tr>
                </thead>
                <tbody>
                    {raceDriverInformation.map( m =>
                            <DriversItem key={m.position} data={m}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default DriversTable;