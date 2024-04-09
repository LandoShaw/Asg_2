
import { useState, useContext } from 'react';
import { GlobalContext } from "../App";

const ResultImages = (props) => {
    let { raceResultInformation 
    } = useContext(GlobalContext);

    const checkNull = () => {
        if (raceResultInformation.length > 3) {
            return (
                <div className="columns">
                    <div className="column">
                        <img src="https://placehold.co/100x100"/>
                        <p><strong>First</strong></p>
                        <p>{raceResultInformation[0].drivers.forename} {raceResultInformation[0].drivers.surname}</p>
                    </div>
                    <div className="column">
                        <img src="https://placehold.co/100x100"/>
                        <p><strong>Second</strong></p>
                        <p>{raceResultInformation[1].drivers.forename} {raceResultInformation[1].drivers.surname}</p>
                    </div>
                    <div className="column">
                        <img src="https://placehold.co/100x100"/>
                        <p><strong>Third</strong></p>
                        <p>{raceResultInformation[2].drivers.forename} {raceResultInformation[2].drivers.surname}</p>
                    </div>  
                </div>
            )
        } else {
            return ;
        }
    }
    return checkNull();
}

export default ResultImages;