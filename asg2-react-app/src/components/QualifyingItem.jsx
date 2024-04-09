
const QualifyingItem = (props) => {
    const handleClickDriver = () => {
        alert("clicked results for " + props.driver);
    }

    return (
        <tr>
            <th>{props.position}</th>
            <td>{props.driver}</td>
            <td>{props.constructor}</td>
            <td>{props.q1}</td>
            <td>{props.q2}</td>
            <td>{props.q3}</td>
        </tr>
    );
}

export default QualifyingItem;