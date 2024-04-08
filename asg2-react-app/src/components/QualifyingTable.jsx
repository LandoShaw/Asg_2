import QualifyingItem from "./QualifyingItem";

const QualifyingTable = (props) => {
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
                    <QualifyingItem position={1} driver={"max verstappen"} constrcuter={"Red Bull"} q1={"1:27:23"} q2={"1:23:23"} q3={"1:23:13"}/>
                    <QualifyingItem position={2} driver={"joe random"} constructor={"Ferrari"} q1={"1:46:23"} q2={"1:23:23"} q3={"1:24:23"}/>
                </tbody>
            </table>
        </div>
    )
}

export default QualifyingTable;