import React from 'react'
import Body from './components/Body'
import NavBar from './components/NavBar'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'mdb-react-ui-kit/dist/js/mdb.min.js';



export default function App() {
  return (
    <div>
      <NavBar/>
      <Body/>
    </div>
  )
}
