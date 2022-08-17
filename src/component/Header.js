import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/system/Box';
export default function Header(){
    return (
        <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop :8,
            display:'flex',
            flexDirection:'column',
            alignItems: 'flex-start',
          }}
        >
        <Typography componet="h1" variant="h5">
          로그인하기
        </Typography>
        </Box>
        </Container>
    )
}