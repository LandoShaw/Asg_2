import ResultItem from "./ResultItem";
import { useState, useContext } from 'react';
import { GlobalContext } from "../App";

const ResultsTable = (props) => {
    let { raceResultInformation 
    } = useContext(GlobalContext);

    return (
        <div>
            <div>
                <img/>
                <img/>
                <img/>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th></th>
                        <th></th>
                        <th>Laps</th>
                        <th>Pts</th>
                    </tr>
                </thead>
                <tbody>
                    {raceResultInformation.map( m =>
                                <ResultItem key={m.grid} data={m}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ResultsTable;
