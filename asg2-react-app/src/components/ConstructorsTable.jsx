import ConstructorsItem from "./ConstructorsItem";
import { useState, useContext } from 'react';
import { GlobalContext } from "../App";

const ConstructorsTable = (props) => {
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
                        <th>Pts</th>
                        <th>Wins</th>
                    </tr>
                </thead>
                <tbody>
                    {raceInformation2.map( m =>
                            <ConstructorsItem key={m.position} data={m}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ConstructorsTable;