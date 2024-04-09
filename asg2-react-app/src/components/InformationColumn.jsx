import ResultsTable from "./ResultsTable";
import ConstructorsTable from "./ConstructorsTable";
import DriversTable from "./DriversTable";
import QualifyingTable from "./QualifyingTable";
import { useState, useContext } from 'react';
import { GlobalContext } from "../App";

const InformationColumn = (props) => {
    let {infomationSide, informationCircuit
        } = useContext(GlobalContext);



    const renderStanding = () => {
        return (
            <div>  
                <h1><strong>Standings</strong></h1>
                <span>After round {informationCircuit.round}</span> 
                <div className="columns">
                    <div className="column">
                        <h2>Drivers</h2>
                        <DriversTable/>
                    </div>
                    <div className="column">
                        <h2>Constructors</h2>
                        <ConstructorsTable/>
                    </div>
                </div>  
            </div>

        );
    }

    const renderResults = () => {
        return (
            <div>
                <h1><strong>Results</strong></h1>
                <span>{informationCircuit.name}, Round {informationCircuit.round}, {informationCircuit.year}, 
                Circuit Name, {informationCircuit.date}, {informationCircuit.url}</span>
                <div className="columns">
                    <div className="column">
                        <h2>Qualifying</h2>
                        <QualifyingTable/>
                    </div>
                    <div className="column">
                        <h2>Results</h2>
                        <ResultsTable/>
                    </div>
                </div>
            </div>

        );
    }

    if (infomationSide == 1) {
        return renderStanding();
    } else if (infomationSide == 2) {
        return renderResults();
    } else {
        return (<div></div>);
    }
}

export default InformationColumn;