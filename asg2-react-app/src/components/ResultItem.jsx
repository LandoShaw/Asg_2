
const ResultItem = (props) => {
    const handleClickDriver = () => {
        alert("clicked results for " + props.name);
    }

    return (
        <tr>
            <th>{props.position}</th>
            <td>{props.driver}</td>
            <td>{props.constructor}</td>
            <td>{props.laps}</td>
            <td>{props.points}</td>
        </tr>
    );
}

export default ResultItem;