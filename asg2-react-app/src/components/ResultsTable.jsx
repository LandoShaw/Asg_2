
import ResultItem from "./ResultItem";

const ResultsTable = (props) => {
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
                    <ResultItem position={1} driver={"Max Verstappen"} constructor={"Reb Bull"} laps={46} points={25}/>
                    <ResultItem position={2} driver={"Italian Grand Prix"} constructor={"Ferrari"} laps={46} points={18}/>
                </tbody>
            </table>
        </div>
    )
}

export default ResultsTable;
