import RaceItem from "./RaceItem";

const RaceTable = (props) => {
    return (
        <div>
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
                    <RaceItem round={1} circuit={"British Grand Prix"}/>
                    <RaceItem round={2} circuit={"Italian Grand Prix"}/>
                </tbody>
            </table>
        </div>
    )
}

export default RaceTable;
