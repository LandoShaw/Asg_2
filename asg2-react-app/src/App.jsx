import "./style.scss"
import { useState, useEffect, createContext } from 'react'
import { createClient } from '@supabase/supabase-js';
import Navbar from './components/Navbar.jsx';
import ContentBox from "./components/ContentBox.jsx";

const supaUrl = 'https://cgsmvcmhbmmgvprycefa.supabase.co';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnc212Y21oYm1tZ3ZwcnljZWZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NDM4MjYsImV4cCI6MjAyNjAxOTgyNn0.HGbpJ4CB3tNj_KvhRViM3a-9RhH_pPhS2aimD7_7fO8';
const supabase = createClient(supaUrl, supaAnonKey);

export const globalContext = createContext();

function App() {

  // 'global variables'
  let [ currentSeasonData, setCurrentSeasonData ] = useState();
  let [ faveDrivers, setFaveDrivers ] = useState();      // array with all of faveDrivers' data.
  let [ faveConstructors, setFaveConstructors ] = useState();                 // array with all of faveConstructors' data.
  let [ faveCircuits, setFaveCircuits ] = useState();                         // array with all of faveCircuits' data.
  let [ selectedDriver, setSelectedDriver ] = useState();                     // for pop up info
  let [ selectedConstructor, setSelectedConstructor ] = useState();
  let [ selectedCircuit, setSelectedCircuit ] = useState();

  return (
    <div>
      <globalContext.Provider 
      value={{supabase, 
        currentSeasonData, setCurrentSeasonData, 
        faveCircuits, setFaveCircuits, faveConstructors, setFaveConstructors, faveDrivers, setFaveDrivers,
        selectedDriver, setSelectedDriver, selectedConstructor, setSelectedConstructor, selectedCircuit, setSelectedCircuit
        }}> 
        <Navbar></Navbar>
        <ContentBox year={2023}/>
      </globalContext.Provider>
    </div>
  )
}

export default App