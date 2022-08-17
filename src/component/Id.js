import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import {useNavigate} from "react-router-dom";
import Password  from './Password';
import userEvent from '@testing-library/user-event';

function Id() { 
  const [userid,setid] = useState(false);
  const [input, setInput]= useState('');
  const [count,setcount]=useState(0);

  const navi = useNavigate();

  let id='jkee7580';

  const temp = (e) => {
    if (id===input)
      navi('/Password');
  }
  //아이디 입력 했을 때 작동되는 함수

  const handleInputChange = (e)=>{
    setInput(e.target.value);
    
  }
  
  const onKeyPress= (e) => {
    if(e.key==='Enter'){
    temp();
    }
  }
  return (
    <div>
      <Container component="main" maxWidth="xs" onKeyDown={onKeyPress}>
        
        <Box>
          <TextField
          morgin="normal"
          label="welcome@logo.com"
          required
          fullWidth
          name='email'
          autoCapitalize='email'
          autoFocus
          onChange={handleInputChange}
          >
          </TextField>
          <Button type="submit" fullWidth variant='contained' sx={{mt:30}}
            onClick={temp}
          >
            확인
          </Button>
                 
          <Grid container>
            <Grid item xs>
              <Link>이메일을 잊으셨습니까?</Link>
            </Grid>
            <Grid item>
              <Link>회원가입</Link>
            </Grid>
          </Grid>
        </Box> 
      </Container>   
      </div>
  );
}

export default Id;
