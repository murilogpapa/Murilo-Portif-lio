import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LeftMenu from './components/LeftMenu.jsx';
import ContentMenu from './components/ContentMenu.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex place-content-center my-6'>
       <LeftMenu />
       <ContentMenu />
       </div>
  )
}

export default App
