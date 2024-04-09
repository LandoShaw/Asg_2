import QualifyingItem from "./QualifyingItem";
import { useState, useContext } from 'react';
import { GlobalContext } from "../App";

const QualifyingTable = (props) => {
    let { raceQualifyingInformation
    } = useContext(GlobalContext);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th></th>
                        <th></th>
                        <th>Q1</th>
                        <th>Q2</th>
                        <th>Q3</th>
                    </tr>
                </thead>
                <tbody>
                    {raceQualifyingInformation.map( m =>
                            <QualifyingItem key={m.position} data={m}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default QualifyingTable;