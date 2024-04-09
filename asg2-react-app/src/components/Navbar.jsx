// source:   https://bulma.io/documentation/components/navbar/
// Brandon Kern, Landon Odishaw-Dyck
import { useState, useContext } from 'react';
import { GlobalContext } from '../App';

const Navbar = (props) => {
    
    // grab globalContext data
    let {supabase, setCurrentSeasonData
        } = useContext(GlobalContext);
    
    async function selectSeasonCallAPI(year) {
        const { data, error } = await supabase
        .from('races')
        .select()
        .eq('year', year)
        .order('round', { ascending: true } );
        if (error) {
            console.error('Error fetching seasons:', error);
              return;
            }
        if (data.length === 0 ) {
            console.log("Did not find the requested data")
        } else {
            setCurrentSeasonData(data);
        }
    }

    let [currentSelection, setCurrentSelection] = useState('Select a Season');
    const handleDropdownClick = (year) => {
        setCurrentSelection(year);
        selectSeasonCallAPI(year);
    };
    
    const [aboutModalVisible, setAboutModalVisible] = useState(false);
    const handleAboutClick = () => {
        setAboutModalVisible(!aboutModalVisible);
    }

    const [faveModalVisible, setFaveModalVisible] = useState(false);
    const handleFaveClick = () => {
        setFaveModalVisible(!faveModalVisible);
    }




    // Generate years from 2000 to 2023 to populate dropdown
    const years = Array.from({length: 2024 - 2000}, (v, k) => k + 2000);

    //Populate lists of faves
    // {faveDrivers.map((driver) => (
    //     <li key={year} className="" onClick={() => handleDriverPopup(year.toString())}> {driver} </li>
    // ))}

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <p className="navbar-item">
             Season
            </p>
        
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  {currentSelection}
                </a>

                <div className="navbar-dropdown" style={{ maxHeight: '200px', overflowY: 'scroll'}}>
                {years.map((year) => (
                    <a key={year} className="navbar-item" onClick={() => handleDropdownClick(year.toString())}> {year} </a>
                ))}
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-light" onClick={() => handleFaveClick()}>
                    <strong>Favorites</strong>
                  </a>
                  <a className="button is-light" onClick={() => handleAboutClick()}>
                  <strong>About</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={`modal ${faveModalVisible ? 'is-active' : ''}`}>
            <div className="modal-background" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
            <div className="modal-card" style={{ width: '70%' }}> {/* Adjust the width as needed */}
                <header className="modal-card-head">
                    <p className="modal-card-title"> <strong>Favorites</strong></p>
                    <button className="delete" aria-label="close" onClick={() => handleFaveClick()}></button>
                </header>
                <section className="modal-card-body">

                    <div className="box">
                    <h2><strong> Favorite Drivers </strong></h2>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                    </div>

                    <div className="box">
                    <h2><strong> Favorite Constructors </strong></h2>
                    <ul>
                        <li>Item A</li>
                        <li>Item B</li>
                        <li>Item C</li>
                    </ul>
                    </div>

                    <div className="box">
                    <h2><strong> Favorite Circuits </strong></h2>
                    <ul>
                        <li>Apple</li>
                        <li>Orange</li>
                        <li>Banana</li>
                    </ul>
                    </div>

                </section>
            </div>
        </div>



          <div className={`modal ${aboutModalVisible ? 'is-active' : ''}`}>
            <div className="modal-background" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title"> <strong>Formula 1 Statistics</strong></p>
                        <button className="delete" aria-label="close" onClick={() => handleAboutClick()}></button>
                    </header>
                    <section className="modal-card-body">
                        <strong>This website can be used to access Formula 1 statistics for drivers, constructors, circuits, and more for the years 1950-2024.
                        The database is implemented using Supabase, while the front-end uses React and Bulma. </strong>
                        Developers: Brandon Kern, Landon Odishaw-Dyck. 
                        GitHub: https://github.com/LandoShaw/Asg_2
                    </section>
                </div>
            </div>

        </nav>
        
        )

    }
    


export default Navbar;