import { useState, useContext } from 'react';
import { GlobalContext } from "../App";


const RaceItem = (props) => {

    let {supabase, 
        currentSeasonData, setCurrentSeasonData, 
        faveCircuits, setFaveCircuits, faveConstructors, setFaveConstructors, faveDrivers, setFaveDrivers,
        selectedDriver, setSelectedDriver, selectedConstructor, setSelectedConstructor, selectedCircuit, setSelectedCircuit,
        infomationSide, setInformationSide, informationCircuit, setInformationCircuit,
        raceInformation1, setRaceInformation1, raceInformation2, setRaceInformation2
        } = useContext(GlobalContext);

    async function selectDriverStandingForRaceCallAPI(raceId) {
        const {data, error} = await supabase
        .from('driver_standing')
        .select(`
        driverStandingsId,
        drivers (driverRef, code, forename, surname),
        races!inner(name, round, year, date),
        points, position, positionText, wins
        `)
        .eq('races.raceId', raceId)
        .order('position', { ascending: true });
        if (error) {
            console.error('Error fetching drivers:', error);
                return;
            }
        if (data.length === 0 ) {
            console.log("Did not find the requested data")
        } else {
            console.log(data);
            setRaceInformation1(data);
        }
    }
    
    async function selectConstructorStandingForRaceCallAPI(raceId) {
        const {data, error} = await supabase
        .from('constructor_standing')
        .select(`
        constructorStandingsId,
        races!inner(name, round, year, date),
        constructors(name, constructorRef, nationality),
        points, position, positionText, wins
        `)
        .eq('races.raceId', raceId)
        .order('position', { ascending: true });
        if (error) {
            console.error('Error fetching constructors:', error);
                return;
            }
        if (data.length === 0 ) {
            console.log("Did not find the requested data")
        } else {
            console.log(data);
            setRaceInformation2(data);
        }
    }

    async function selectQualifyingForRaceCallAPI(raceId) {
        const {data, error} = await supabase
        .from('qualifying')
        .select(`
        qualifyId, number,
        drivers (driverRef, code, forename, surname),
        races (name, round, year, date),
        constructors (name, constructorRef, nationality),
        position, q1, q2, q3
        `)
        .eq('raceId', raceId)
        .order('position', { ascending: true });
        if (error) {
            console.error('Error fetching constructors:', error);
                return;
            }
        if (data.length === 0 ) {
            console.log("Did not find the requested data")
        } else {
            console.log(data);
            setRaceInformation1(data);
        }
    }
    
    async function selectResultsForRaceCallAPI(raceId) {
        const {data, error} = await supabase
        .from('results')
        .select(`
        resultId, number, grid, position, positionText, positionOrder, points, laps, time, milliseconds, fastestLap, rank, fastestLapTime, fastestLapSpeed,
        statusId, 
        drivers(driverRef, code, forename, surname),
        races(raceId, name, round, year, date),
        constructors(name, constructorRef, nationality)
        `)
        .eq('raceId', raceId)
        .order('grid', { ascending: true });
        if (error) {
            console.error('Error fetching constructors:', error);
                return;
            }
        if (data.length === 0 ) {
            console.log("Did not find the requested data")
        } else {
            console.log(data);
            setRaceInformation2(data);
        }
    }

    const handleClickResults = () => {
        setInformationSide(2);
        setInformationCircuit(props.data);
        selectQualifyingForRaceCallAPI(props.data.raceId);
        selectResultsForRaceCallAPI(props.data.raceId)
        alert("clicked results for " + props.data.name);
    }

    const handleClickStandings = () => {
        setInformationSide(1);
        setInformationCircuit(props.data);
        selectConstructorStandingForRaceCallAPI(props.data.raceId);
        selectDriverStandingForRaceCallAPI(props.data.raceId);
        alert("clicked standings for " + props.data.name);
    }

    return (
        <tr>
            <th>{props.data.round}</th>
            <td>{props.data.name}</td>
            <td><button onClick={handleClickResults} className="button is-link is-small">Results</button></td>
            <td><button onClick={handleClickStandings} className="button is-link is-small">Standings</button></td>
        </tr>
    );
}

export default RaceItem;