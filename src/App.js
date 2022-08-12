
// import './App.css';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

// 나는 버튼을누르면 로그인기능을 만들겠습니다


// 버튼을 눌렀을때 값을 가져오고 비교하고 대입한다
// 5번틀렸을때 에러또는ㄴ 경고창이 나오게만든다
// useE


function App() { 
  // const [userid,setid]=useState(false);
  const [input, setInput]= useState('');
  const [count,setcount]=useState(0);

  let id='jkee7580';
    
  const onClick=() => {
    if(id===input) return alert('아이디값이 맞습니다');
    else{
      setcount(count + 1);
      if(count>=5) return alert('5회 초과입니다.');
    }
    //요기서 다음 페이지로 넘어갈 수 있는 회원가입 페이지와 패스워드 페이즈로 넘어가는 함수 설정
  }

 

  const handleInputChange = (e)=>{
    setInput(e.target.value);
    
  }
  
  const onKeyPress= (e) => {
    if(e.key==='Enter')
    onClick();
    console.log(e.target.value);
  }
  return (
    <div>
      <Container component="main" maxWidth="xs" onKeyDown={onKeyPress}>
        <Box
          sx={{
            marginTop :8,
            display:'flex',
            flexDirection:'column',
            alignItems: 'flex-start',
          }}
        >
        <Typography componet="h1" variant="h5">
          이메일을 입력해주세요
        </Typography>
        </Box>

        <Box>
          <TextField
          morgin="normal"
          label="welcome@logo.com"
          required
          fullWidth
          name='email'
          autoCapitalize='email'
          value={input}
          onChange ={handleInputChange}
          
          >
          </TextField>
            
          <Button type="submit" fullWidth variant='contained' sx={{mt:30}}
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

export default App;
