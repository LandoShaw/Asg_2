
const ConstructorsItem = (props) => {
    const handleClickDriver = () => {
        alert("clicked results for " + props.name);
    }

    return (
        <tr>
            {/* {console.log(props.data)} */}
            <th>{props.data.position}</th>
            <td>{props.data.constructors.name}</td>
            <td>{props.data.points}</td>
            <td>{props.data.wins}</td>
        </tr>
    );
}

export default ConstructorsItem;