import "./style.scss"
import { useState, useEffect, createContext } from 'react'
import { createClient } from '@supabase/supabase-js';
import Navbar from './components/Navbar.jsx';
import ContentBox from "./components/ContentBox.jsx";

const supaUrl = 'https://gpguqnzzbamugsskjpce.supabase.co/';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwZ3Vxbnp6YmFtdWdzc2tqcGNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2NDIxMDAsImV4cCI6MjAyNDIxODEwMH0.NrxelAdhbR2l2s91_rJ0leFtXcw-NzL2Z59PNAyivFg';
const supabase = createClient(supaUrl, supaAnonKey);

export const GlobalContext = createContext();

function App() {

  // 'global variables'
  let [ currentSeasonData, setCurrentSeasonData ] = useState([]);
  let [ faveDrivers, setFaveDrivers ] = useState([]);      // array with all of faveDrivers' data.
  let [ faveConstructors, setFaveConstructors ] = useState([]);                 // array with all of faveConstructors' data.
  let [ faveCircuits, setFaveCircuits ] = useState([]);                         // array with all of faveCircuits' data.
  let [ selectedDriver, setSelectedDriver ] = useState([]);                     // for pop up info
  let [ selectedConstructor, setSelectedConstructor ] = useState([]);
  let [ selectedCircuit, setSelectedCircuit ] = useState([]);
  let [ infomationSide, setInformationSide] = useState(0);
  let [ informationCircuit, setInformationCircuit] = useState([]);
  let [ raceDriverInformation, setraceDriverInformation] = useState([]);
  let [ raceConstructorInformation, setRaceConstructorInformation] = useState([]);
  let [ raceQualifyingInformation, setraceQualifyingInformation] = useState([]);
  let [ raceResultInformation, setraceResultInformation] = useState([]);


  return (
    <div>
      <GlobalContext.Provider 
      value={{supabase, 
        currentSeasonData, setCurrentSeasonData, 
        faveCircuits, setFaveCircuits, faveConstructors, setFaveConstructors, faveDrivers, setFaveDrivers,
        selectedDriver, setSelectedDriver, selectedConstructor, setSelectedConstructor, selectedCircuit, setSelectedCircuit,
        infomationSide, setInformationSide, informationCircuit, setInformationCircuit,
        raceDriverInformation, setraceDriverInformation, raceConstructorInformation, setRaceConstructorInformation, 
        raceQualifyingInformation, setraceQualifyingInformation, raceResultInformation, setraceResultInformation
        }}> 
        <Navbar></Navbar>
        <ContentBox year={2023}/>
      </GlobalContext.Provider>
    </div>
  )
}

export default App