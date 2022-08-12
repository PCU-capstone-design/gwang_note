import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';

function password() { 
  const [userid,setid]=useState(false);

  const onClick=() => {
    console.log('a');
    //홈페이지로 가는 함수 만들기
  }
  const onKeyPress= (e) => {
    if(e.key=='Enter')
    onClick();
    
  }
  return (
      <Container component="main" maxWidt="xs" onKeyDown={onKeyPress}>
        <Box
          sx={{
            marginTop :8,
            display:'flex',
            flexDirection:'column',
            alignItems: 'flex-start',
          }}
        >
        <Typography componet="h1" variant="h5">
          비밀번호
        </Typography>
        </Box>

        <Box>
          <TextField
          morgin="normal"
          label="password"
          type="password"
          required
          fullWidth
          name='password'
          autoComplete='current-password'
          
          >
          </TextField>
            
          <Button type="submit" fullWidth variant='contained' sx={{mt:30}}
            // onClick={() => setid(!userid)}
            onClick={onClick}
          >
            확인
          </Button>
        </Box>

      </Container>
  );
}

export default password;
