import { Box, Container, Typography } from "@mui/material";

function LoseScreen() {
  return (
      <Box sx={{
        height: '100%',
        backgroundImage: 'url("./dorka1.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        }}
        >
          <Typography
           variant="h2"
           fontWeight='bold'
            color='white' 
            textAlign='center'
          >Volt hibás válasz, no ajándék.</Typography>
      </Box>
  );
}

export default LoseScreen;