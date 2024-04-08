
const RaceItem = (props) => {
    const handleClickResults = () => {
        alert("clicked results for " + props.circuit);
    }

    const handleClickStandings = () => {
        alert("clicked standings for " + props.circuit);
    }

    return (
        <tr>
            <th>{props.round}</th>
            <td>{props.circuit}</td>
            <td><button onClick={handleClickResults} className="button is-link is-small">Results</button></td>
            <td><button onClick={handleClickStandings} className="button is-link is-small">Standings</button></td>
        </tr>
    );
}

export default RaceItem;