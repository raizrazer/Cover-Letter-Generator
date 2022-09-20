import { TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addMessage } from '../app/slicers/messagesSlice'
const InputMessage = ({value, content}) => {
  const dispatch = useDispatch()
  const [message,setMessage] = useState(content)
  const handleChange = (e) =>{
    setMessage(e.target.value)
    dispatch(addMessage(e.target.value))
  }
  return (
    <div>
        <TextField
                id="outlined-multiline-static"
                label={value}
                multiline
                fullWidth
                value={message}
                onChange={handleChange}
              />
    </div>
  )
}

export default InputMessage