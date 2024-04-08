
const ConstructersItem = (props) => {
    const handleClickDriver = () => {
        alert("clicked results for " + props.name);
    }

    return (
        <tr>
            <th>{props.position}</th>
            <td>{props.name}</td>
            <td>{props.points}</td>
            <td>{props.wins}</td>
        </tr>
    );
}

export default ConstructersItem;