
const DriversItem = (props) => {
    const handleClickDriver = () => {
        alert("clicked results for " + props.name);
    }

    return (
        <tr>
            <th>{props.data.position}</th>
            <td>{props.data.drivers.forename} {props.data.drivers.surname}</td>
            <td>{props.data.points}</td>
            <td>{props.data.wins}</td>
        </tr>
    );
}

export default DriversItem;