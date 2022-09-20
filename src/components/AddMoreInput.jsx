import React from 'react'
import {Box,TextField,Button} from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

import { useDispatch } from 'react-redux'
import { addInput } from '../app/slicers/inputsSlice'
import { useState } from 'react'

const AddMoreInput = () => {
  const dispatch = useDispatch()

  const  [value,setValue] = useState('')
  const handleClick =()=>{
    setValue('')
    if(value === ''){
      alert("Value is empty")
    }
    else{
      dispatch(addInput({value:value}))
    }
  }
  return (
    <div>
        <Box sx={{margin:"20px 0px",display:"flex",flexDirection:"column",gap:"10px"}}>
                  <TextField
                  fullWidth
                    id="outlined-basic"
                    label="Input Name"
                    variant="outlined"
                    placeholder='Example : Skill'
                    value={value}
                    onChange={(e)=>{setValue(e.target.value)}}
                  />
                  <Button
                    variant="outlined"
                    startIcon={<AddCircleOutlineIcon />}
                    onClick={handleClick}
                  >
                    Add More Field
                  </Button>
                </Box>
    </div>
  )
}

export default AddMoreInput