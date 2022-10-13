import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import {useNavigate} from "react-router-dom";

//2022년 8월 15일 - 첫번째 app 페이지에서 가지고 있는 아이디와 일치 했을 때 넘어가는 페이지
//해당 페이지에서 다음 페이지로 넘어갔을때 홈페이지가 나와야하며
//5회 이상 틀리면 해당 아이디의 비밀번호를 막아준다. (본인확인해야되게)
//그 아래에 비밀번호를 찾을수있는 링크를 넣어준다.

 export default function Password() { 
 
  const onClick=() => {
    console.log('a');
    //홈페이지로 가는 함수 만들기
  }
  const onKeyPress= (e) => {
    if(e.key==='Enter')
    onClick();
    
  }
  return (
    <div>
      <Container component="main" maxWidth="xs" onKeyDown={onKeyPress}>
       
        <Box>
          <TextField
          morgin="normal"
          label="비밀번호 입력"
          type="password"
          required
          fullWidth
          name='password'
          autoFocus
          autoComplete='current-password'
          
          >
          </TextField>
            
          <Button type="submit" fullWidth variant='contained' sx={{mt:30}}
            // onClick={() => setid(!userid)}
            onClick={onClick}
          >
            확인
          </Button>
          <Grid container>
            <Grid item xs>
              <Link>비밀번호를 잊으셨습니까?</Link>
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

// export default password;
