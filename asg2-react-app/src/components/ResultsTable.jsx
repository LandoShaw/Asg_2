import ResultItem from "./ResultItem";
import { useState, useContext } from 'react';
import { GlobalContext } from "../App";

const ResultsTable = (props) => {
    let {supabase, 
        currentSeasonData, setCurrentSeasonData, 
        faveCircuits, setFaveCircuits, faveConstructors, setFaveConstructors, faveDrivers, setFaveDrivers,
        selectedDriver, setSelectedDriver, selectedConstructor, setSelectedConstructor, selectedCircuit, setSelectedCircuit,
        infomationSide, setInformationSide, informationCircuit, setInformationCircuit,
        raceInformation1, setRaceInformation1, raceInformation2, setRaceInformation2
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
                    {raceInformation2.map( m =>
                                <ResultItem key={m.grid} data={m}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ResultsTable;
