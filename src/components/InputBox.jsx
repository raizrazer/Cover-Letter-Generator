import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import {addInputValue} from '../app/slicers/inputsSlice'

import { useDispatch,useSelector } from "react-redux";
import { deleteInput } from "../app/slicers/inputsSlice";

function InputBox({ value, multilined ,id}) {
  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.inputs.value)
  var inputValue  = inputs[id].inputvalue
  // const [inputValue, setInputValue] = useState("");
  function handleChange(e) {
    e.preventDefault();
    // setInputValue(e.target.value);
    // inputValue  = inputs[id].inputvalue
    dispatch(addInputValue({title:value,inputvalue:e.target.value}))
    // console.log(inputs[id].inputvalue)
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "10px 0px",
        borderRadius: "0px",
        padding: "4px",
        width: "100%",
      }}
    >
      <FormControl variant="standard" fullWidth>
        <InputLabel htmlFor="component-helper" sx={{color:'blue'}}>
          {inputValue === "" ? value : inputs[id].id}
        </InputLabel>
        <Input
          required
          id="component-helper"
          value={inputValue}
          onChange={handleChange}
          aria-describedby="component-helper-text"
          multiline={multilined}
          maxRows={5}
          sx={{
            paddingLeft: "10px",
          }}
        />
        <FormHelperText id="component-helper-text">
          Enter {value}
        </FormHelperText>
      </FormControl>
      <Tooltip title="Delete">
            <IconButton
              aria-label="delete"
              onClick={() => {
                dispatch(deleteInput({id:id}))
                console.log("Delete Item Clicked");
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
    </Box>
  );
}

export default InputBox;
