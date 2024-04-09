import ConstructorsItem from "./ConstructorsItem";
import { useState, useContext } from 'react';
import { GlobalContext } from "../App";

const ConstructorsTable = (props) => {
    let { raceConstructorInformation
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
                    {raceConstructorInformation.map( m =>
                            <ConstructorsItem key={m.position} data={m}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ConstructorsTable;