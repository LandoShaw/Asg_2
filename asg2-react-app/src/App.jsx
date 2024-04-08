import "./style.scss"
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js';
import Navbar from './components/Navbar.jsx';
import ContentBox from "./components/ContentBox.jsx";

const supaUrl = 'https://cgsmvcmhbmmgvprycefa.supabase.co';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnc212Y21oYm1tZ3ZwcnljZWZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NDM4MjYsImV4cCI6MjAyNjAxOTgyNn0.HGbpJ4CB3tNj_KvhRViM3a-9RhH_pPhS2aimD7_7fO8';
const supabase = createClient(supaUrl, supaAnonKey);

function App() {

  // const [seasons, setSeasons] = useState([]);
  // useEffect( () => { selectSeasons(); }, []);

  // async function selectSeasons() {
  //   const { data, error } = await supabase.from('seasons').select('*');
  //   if (error) {
  //   console.error('Error fetching seasons:', error);
  //     return;
  //   }
  //   setSeasons(data);
  // }

  return (
    <div className="main">
      <Navbar/>
      <ContentBox year={2023}/>
    </div>
  )
}





export default App
