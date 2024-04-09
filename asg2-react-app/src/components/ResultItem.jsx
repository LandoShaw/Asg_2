
const ResultItem = (props) => {
    const handleClickDriver = () => {
        alert("clicked results for " + props.name);
    }

    

    return (
        <tr>
            <th>{props.data.grid}</th>
            <td>{props.data.drivers.forename} {props.data.drivers.surname}</td>
            <td>{props.data.constructors.name}</td>
            <td>{props.data.laps}</td>
            <td>{props.data.points}</td>
        </tr>
    );
}

export default ResultItem;