
const QualifyingItem = (props) => {
    const handleClickDriver = () => {
        alert("clicked results for " + props.driver);
    }

    return (
        <tr>
            <th>{props.data.position}</th>
            <td>{props.data.drivers.forename} {props.data.drivers.surname}</td>
            <td>{props.data.constructors.name}</td>
            <td>{props.data.q1}</td>
            <td>{props.data.q2}</td>
            <td>{props.data.q3}</td>
        </tr>
    );
}

export default QualifyingItem;