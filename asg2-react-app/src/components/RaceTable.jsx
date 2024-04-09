import RaceItem from "./RaceItem";
import { useState, useContext } from 'react';
import { globalContext } from "../App";

const RaceTable = (props) => {

    let {supabase, 
        currentSeasonData, setCurrentSeasonData, 
        faveCircuits, setFaveCircuits, faveConstructors, setFaveConstructors, faveDrivers, setFaveDrivers,
        selectedDriver, setSelectedDriver, selectedConstructor, setSelectedConstructor, selectedCircuit, setSelectedCircuit
        } = useContext(globalContext);

    return (
        <div>
            <p><strong>{currentSeasonData[0].year} Races</strong></p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Rnd</th>
                        <th>Circuit</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currentSeasonData.map( m =>
                        <RaceItem round={m.round} circuit={m.name}/>)}

                </tbody>
            </table>
        </div>
    )
}

export default RaceTable;
