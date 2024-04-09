import ResultItem from "./ResultItem";
import { useState, useContext } from 'react';
import { GlobalContext } from "../App";

const ResultsTable = (props) => {
    let { raceResultInformation 
    } = useContext(GlobalContext);

    return (
        <div>
            <div>
                <div className="columns">
                    <div className="column">
                        <img src="https://placehold.co/100x100"/>
                        <p><strong>First</strong></p>
                        <p>{raceResultInformation[0].drivers.forename} {raceResultInformation[0].drivers.surname}</p>
                    </div>
                    <div className="column">
                        <img src="https://placehold.co/100x100"/>
                        <p><strong>First</strong></p>
                        <p>{raceResultInformation[1].drivers.forename} {raceResultInformation[1].drivers.surname}</p>
                    </div>
                    <div className="column">
                        <img src="https://placehold.co/100x100"/>
                        <p><strong>First</strong></p>
                        <p>{raceResultInformation[2].drivers.forename} {raceResultInformation[2].drivers.surname}</p>
                    </div>  
                </div>

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
