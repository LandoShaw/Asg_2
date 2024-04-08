import ResultsTable from "./ResultsTable";
import ConstructorsTable from "./ConstructorsTable";
import DriversTable from "./DriversTable";
import QualifyingTable from "./QualifyingTable";

const InformationColumn = (props) => {
    const page = 2;

    const renderStanding = () => {
        return (
            <div className="columns">
                <p><strong>Standings</strong></p>
                <p>After round 2</p> 
                <div className="column">
                    <p>Drivers</p>
                    <DriversTable/>
                </div>
                <div className="column">
                    <p>Constructors</p>
                    <ConstructorsTable/>
                </div>
            </div>  
        );
    }

    const renderResults = () => {
        return (
            <div className="columns">
                <p><strong>Results</strong></p>
                <p>Race Name, Round #, year, Circuit Name, Date, URL</p>
                <div className="column">
                    <p>Qualifying</p>
                    <QualifyingTable/>
                </div>
                <div className="column">
                    <p>Results</p>
                    <ResultsTable/>
                </div>
            </div>
        );
    }

    if (page == 1) {
        return renderStanding();
    } else if (page == 2) {
        return renderResults();
    } else {
        return (<div></div>);
    }
}

export default InformationColumn;