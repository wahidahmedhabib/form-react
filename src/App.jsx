import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
// import Input from './component/Form/Input'
// import TextField from '@mui/material/TextField';
import { Box, TextField } from '@mui/material'
import Form from './component/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
<div className='mt-28'></div>
      {/* <TextField /> */}

      {/* <Box
        className=' mx-auto my-0 container flex  items-center justify-center  border  bg-red-300'
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '300px' },
        }}
        // noValidate

        autoComplete="off"
      >
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box> */}

      {/* <div
        className=' mx-auto my-0  h-[300px] w-[500px] container flex flex-col items-center justify-center gap-6  border  bg-blue-300 mt-20'

      > */}


        <Form />
      {/* </div> */}

      {/* <Input /> */}

    </>
  )
}

export default App
