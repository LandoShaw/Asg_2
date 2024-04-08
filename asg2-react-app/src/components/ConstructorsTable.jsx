import ConstructorsItem from "./ConstructorsItem";

const ConstructorsTable = (props) => {
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
                    <ConstructorsItem position={1} name={"Red Bull"} points={35} wins={2}/>
                    <ConstructorsItem position={2} name={"Ferrari"} points={17} wins={0}/>
                </tbody>
            </table>
        </div>
    )
}

export default ConstructorsTable;