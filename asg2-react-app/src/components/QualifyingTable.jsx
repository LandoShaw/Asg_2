import QualifyingItem from "./QualifyingItem";
import { useState, useContext } from 'react';
import { GlobalContext } from "../App";

const QualifyingTable = (props) => {
    let {supabase, 
        currentSeasonData, setCurrentSeasonData, 
        faveCircuits, setFaveCircuits, faveConstructors, setFaveConstructors, faveDrivers, setFaveDrivers,
        selectedDriver, setSelectedDriver, selectedConstructor, setSelectedConstructor, selectedCircuit, setSelectedCircuit,
        infomationSide, setInformationSide, informationCircuit, setInformationCircuit,
        raceInformation1, setRaceInformation1, raceInformation2, setRaceInformation2
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
                    {raceInformation1.map( m =>
                            <QualifyingItem key={m.position} data={m}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default QualifyingTable;