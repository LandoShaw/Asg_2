import DriversItem from "./DriversItem";

const DriversTable = (props) => {
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
                    <DriversItem position={1} name={"Max Verstappen"} points={25} wins={2}/>
                    <DriversItem position={2} name={"CharlesLecerc"} points={14} wins={0}/>
                </tbody>
            </table>
        </div>
    )
}

export default DriversTable;