import "./style.scss"
import { useState, useEffect, createContext } from 'react'
import { createClient } from '@supabase/supabase-js';
import Navbar from './components/Navbar.jsx';


const supaUrl = 'https://gpguqnzzbamugsskjpce.supabase.co/';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwZ3Vxbnp6YmFtdWdzc2tqcGNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2NDIxMDAsImV4cCI6MjAyNDIxODEwMH0.NrxelAdhbR2l2s91_rJ0leFtXcw-NzL2Z59PNAyivFg';
const supabase = createClient(supaUrl, supaAnonKey);

export const globalContext = createContext();


function App() {

  // 'global variables'
  let [ currentSeasonData, setCurrentSeasonData ] = useState();
  let [ faveDrivers, setFaveDrivers ] = useState([
    {
      "code": "HAM",
      "dob" : "1985-01-07",
      "driverId" : 1,
      "driverRef" : "hamilton",
      "forename" : "Lewis",
      "nationality" : "British",
      "number" : 44,
      "surname" : "Hamilton",
      "url" : "http://en.wikipedia.org/wiki/Lewis_Hamilton"
    }
  ]);      // array with all of faveDrivers' data.
  
  let [ faveConstructors, setFaveConstructors ] = useState([
    {
      "constructorId": 1,
      "constructorRef": "mclaren",
      "name": "McLaren",
      "nationality": "British",
      "url": "http://en.wikipedia.org/wiki/McLaren"
    }
  ]);                 // array with all of faveConstructors' data.
  let [ faveCircuits, setFaveCircuits ] = useState([
    {
      "circuitId": 1,
      "circuitRef": "albert_park",
      "name": "Albert Park Grand Prix Circuit",
      "location": "Melbourne",
      "country": "Australia",
      "lat": -37.8497,
      "lng": 114.968,
      "alt": 10,
      "url": "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit"
    }
  ]);                         // array with all of faveCircuits' data.
  let [ selectedDriver, setSelectedDriver ] = useState({});                     // for pop up info
  let [ selectedConstructor, setSelectedConstructor ] = useState([]);
  let [ selectedCircuit, setSelectedCircuit ] = useState([]);

    //project info, when about button clicked
    const [aboutModalVisible, setAboutModalVisible] = useState(false);
    const handleAboutClick = () => {
        setAboutModalVisible(!aboutModalVisible);
    }

    //faves info, when faves button clicked
    const [faveModalVisible, setFaveModalVisible] = useState(false);
    const handleFaveClick = () => {
        setFaveModalVisible(!faveModalVisible);
    }

    //query driver info when name clicked
    const [driverModalVisible, setDriverModalVisible] = useState(false);
    const handleDriverPopup = async (driverId) => {
      const { data, error } = await supabase.from('drivers').select().eq('driverId', driverId)       //grab driver from DB based on driver id
      if (error) {
          console.error('Error fetching driver:', error);
            return;
          }
      if (data.length === 0 ) {
          console.log("Did not find the requested data")
      } else {
        setSelectedDriver(data[0]);
        setDriverModalVisible(true);
      }
    }
    
    // if DNE in driverFaves, add selectedDriver to driverFaves
    const addFaveDriverHandler = (driver) => {
      const exists = faveDrivers.some(obj => obj['driverId'] === driver['driverId']);      
      if( !exists ){
        let temp = [...faveDrivers];
        temp.push(driver);
        setFaveDrivers(temp);
      }
    }

    //constructor info, when constructor name clicked
    const [constructorModalVisible, setConstructorModalVisible] = useState(false);
    const handleConstructorPopup = async (constructorId) => {
      const { data, error } = await supabase.from('constructors').select().eq('constructorId', constructorId)       //grab constructor from DB based on driver id
      console.log(data[0]);
      if (error) {
          console.error('Error fetching constructor:', error);
            return;
          }
      if (data.length === 0 ) {
          console.log("Did not find the requested data")
      } else {
        setSelectedConstructor(data[0]);
        setConstructorModalVisible(true);
      }
    }

    // if DNE in constructorFaves, add selectedConstructor to constructorFaves
    const addFaveConstructorHandler = (constructor) => {
      const exists = faveConstructors.some(obj => obj['constructorId'] === constructor['constructorId']);      
      if( !exists ){
        let temp = [...faveConstructors];
        temp.push(constructor);
        setFaveConstructors(temp);
      }
    }

    //circuit info, when circuit name clicked
    const [circuitModalVisible, setCircuitModalVisible] = useState(false);
    const handleCircuitPopup = async (circuitId) => {
      const { data, error } = await supabase.from('circuits').select().eq('circuitId', circuitId)       //grab circuit from DB based on circuit id
      if (error) {
          console.error('Error fetching circuit:', error);
            return;
          }
      if (data.length === 0 ) {
          console.log("Did not find the requested data")
      } else {
        setSelectedCircuit(data[0]);
        setCircuitModalVisible(true);
      }
    }

    // if DNE in circuitFaves, add selectedCircuit to circuitFaves
    const addFaveCircuitHandler = (circuit) => {
      const exists = faveCircuits.some(obj => obj['circuitId'] === circuit['circuitId']);      
      if( !exists ){
        let temp = [...faveCircuits];
        temp.push(circuit);
        setFaveCircuits(temp);
      }
    }

    const clearFavesHandler = () =>{
      setFaveDrivers([]);
      setFaveConstructors([]);
      setFaveCircuits([]);
    }


  return (
    <div>
      <globalContext.Provider 
      value={{supabase, 
        currentSeasonData, setCurrentSeasonData, 
        faveCircuits, setFaveCircuits, faveConstructors, setFaveConstructors, faveDrivers, setFaveDrivers,
        selectedDriver, setSelectedDriver, selectedConstructor, setSelectedConstructor, selectedCircuit, setSelectedCircuit,
        handleAboutClick, handleFaveClick, handleDriverPopup, handleConstructorPopup, handleCircuitPopup
        }}> 
        <Navbar></Navbar>
        
        <div className={`modal ${faveModalVisible ? 'is-active' : ''}`}>
            <div className="modal-background" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
            <div className="modal-card" style={{ width: '70%' }}> {/* Adjust the width as needed */}
                <header className="modal-card-head">
                    <p className="modal-card-title"> <strong>Favorites</strong></p>
                    <button className="button is-light" onClick={() => clearFavesHandler() }> Clear Favorites </button>
                    <button className="delete" aria-label="close" onClick={() => handleFaveClick()}></button>
                </header>
                <section className="modal-card-body">

                    <div className="box">
                    <h2><strong> Favorite Drivers </strong></h2>
                    <ul>
                        {faveDrivers.map((driver) => (
                        <li key={driver.driverId} className="" onClick={() => handleDriverPopup(driver.driverId)}>{`${driver.forename}, ${driver.surname}`}</li>  
                        ))}
                    </ul>
                    </div>

                    <div className="box">
                    <h2><strong> Favorite Constructors </strong></h2>
                    <ul>
                    {faveConstructors.map((constructor) => (
                        <li key={constructor.constructorId} className="" onClick={() => handleConstructorPopup(constructor.constructorId)}>{constructor.name}</li>  
                        ))}
                    </ul>
                    </div>
                    <div className="box">
                    <h2><strong> Favorite Circuits </strong></h2>
                    <ul>
                    {faveCircuits.map((circuit) => (
                        <li key={circuit.circuitId} className="" onClick={() => handleCircuitPopup(circuit.circuitId)}>{circuit.name}</li>  
                        ))}
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

            <div className={`modal ${driverModalVisible ? 'is-active' : ''}`}>
            <div className="modal-background" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title"> <strong>Driver Details</strong></p>
                        <button className="button is-light" onClick={() => addFaveDriverHandler(selectedDriver) }> Favorite </button>
                        <button className="delete" aria-label="close" onClick={() => setDriverModalVisible(false) }></button>
                    </header>
                    <section className="modal-card-body">
                    <p>First Name: {selectedDriver.forename}</p>
                    <p>Last Name: {selectedDriver.surname}</p>
                    <p>Date of Birth: {selectedDriver.dob}</p>
                    <p>Nationality: {selectedDriver.nationality}</p>
                    <p>Wikipedia: {selectedDriver.url}</p>
                    </section>
                </div>
            </div>

            <div className={`modal ${constructorModalVisible ? 'is-active' : ''}`}>
            <div className="modal-background" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title"> <strong>Constructor Details</strong></p>
                        <button className="button is-light" onClick={() => addFaveConstructorHandler(selectedConstructor) }> Favorite </button>
                        <button className="delete" aria-label="close" onClick={() => setConstructorModalVisible(false) }></button>
                    </header>
                    <section className="modal-card-body">
                    <p>Name: {selectedConstructor.name}</p>
                    <p>Nationality: {selectedConstructor.nationality}</p>
                    <p>Wikipedia: {selectedConstructor.url}</p>
                    </section>
                </div>
            </div>

            <div className={`modal ${circuitModalVisible ? 'is-active' : ''}`}>
            <div className="modal-background" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title"> <strong>Circuit Details</strong></p>
                        <button className="button is-light" onClick={() => addFaveCircuitHandler(selectedCircuit) }> Favorite </button>
                        <button className="delete" aria-label="close" onClick={() => setCircuitModalVisible(false) }></button>
                    </header>
                    <section className="modal-card-body">
                    <p>Name: {selectedCircuit.name}</p>
                    <p>Location: {selectedCircuit.location}</p>
                    <p>Country: {selectedCircuit.country}</p>
                    <p>Wikipedia: {selectedCircuit.url}</p>
                    </section>
                </div>
            </div>


      </globalContext.Provider>
    </div>
  )
}

export default App
