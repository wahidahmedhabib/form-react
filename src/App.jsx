import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
// import Input from './component/Form/Input'
// import TextField from '@mui/material/TextField';
import { Box, TextField } from '@mui/material'
import Form from './component/Form/Form'
import Stopper from './component/stopper/Stopper'
import DrawerMenu from './component/Drawer/DrawerMenu'

// import DrawerMenu from './component/Drawer/DrawerMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='mt-28'></div>
      {/* <DrawerMenu /> */}
      {/* <TextField /> */}
      <div
        className=' mx-auto my-0  min-h-[200px] max-w-[680px] container flex flex-col items-center justify-center gap-6    rounded-xl mt-20'
      >
        <Stopper />
      </div>
      {/* <Form /> */}

    </>
  )
}

export default App
