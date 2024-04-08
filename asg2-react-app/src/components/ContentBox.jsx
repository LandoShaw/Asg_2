import RaceTable from "./RaceTable"

const ContentBox = (props) => {

    return (
        <div className="columns is-2" >
            <div className="column is-one-third has-background-primary">
                <RaceTable/>
                {/* <aside/>
                <aside className="menu">
                    <p className="menu-label">Races</p>
                    <ul className="menu-list">
                        <li><a>Rnd Circuit</a></li>
                        <li><a><RaceListItem circuit={"Britsh Grand Prix"} round={1}/></a></li>
                    </ul>
                </aside> */}
            </div>

            {/* <div className="column  has-background-primary-00">
                <p>content</p>
    </div> */}
        </div>
    )
}

export default ContentBox;