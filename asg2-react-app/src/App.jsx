import "./style.scss"
import { useState, useEffect, createContext } from 'react'
import { createClient } from '@supabase/supabase-js';
import Navbar from './components/Navbar.jsx';

const supaUrl = 'https://cgsmvcmhbmmgvprycefa.supabase.co';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnc212Y21oYm1tZ3ZwcnljZWZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NDM4MjYsImV4cCI6MjAyNjAxOTgyNn0.HGbpJ4CB3tNj_KvhRViM3a-9RhH_pPhS2aimD7_7fO8';
const supabase = createClient(supaUrl, supaAnonKey);

export const globalContext = createContext();

function App() {

  // globally available current season
  let [currentSeasonData, setCurrentSeasonData] = useState();

  return (
    <div>
      <globalContext.Provider value={{ supabase, currentSeasonData, setCurrentSeasonData }}> 
        <Navbar></Navbar>
      </globalContext.Provider>
    </div>
  )
}

export default App
