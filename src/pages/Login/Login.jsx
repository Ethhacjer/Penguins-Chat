import { Box, Card, CardContent, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import { useUserAuth } from '../../context/userAuthContext';
import './Login.css';

export default function Login() {
  const { googleSignInWithPopup, user, detectMob, googleSignIn, githubSignIn, githubSignInWithPopup } =
    useUserAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e, provider) => {
    e.preventDefault();
    try {
      switch (provider) {
        case 'google':
          await detectMob() ? googleSignIn() : googleSignInWithPopup();
          navigate('/chat');
          break;

        case 'github':
          await detectMob() ? githubSignIn() : githubSignInWithPopup();
          navigate('/chat');
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/chat');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant='h4' color='text.secondary' gutterBottom>
          Chat-only
        </Typography>
        <Box
        style={{padding: '12px 20px'}}
        >
          <div className='google-btn' role={'button'} onClick={(e) => handleSignIn(e, 'google')}>
            <div className='google-icon-wrapper'>
              <img
                className='google-icon'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB'
                alt='google'
              />
            </div>
            <p className='btn-text'>
              <b>Login with Google</b>
            </p>
          </div>
        </Box>
        <Box 
        width='100%'
        style={{padding: '12px 20px'}}
        mt={0.5}>
          <div className='google-btn' style={{ backgroundColor: "#03060a" }} role={'button'} onClick={(e) => handleSignIn(e, 'github')}>
            <div className='google-icon-wrapper'>
              <img className='google-icon' src='https://github.com/fluidicon.png' alt='Github' />
            </div>
            <p className='btn-text'>
              <b>Login with Github</b>
            </p>
          </div>
        </Box>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Layout sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          padding: '24px', // Increased padding
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          inset: '0px',
          maxWidth: '480px', // Increased width 
          height: 'auto', // Adjust height dynamically
          minHeight: '250px', // Set minimum height
          overflowY: 'auto',
          background: 'rgba( 255, 255, 255, 0.4 )',
          boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.37)', // Stronger shadow
          // backdropFilter: 'blur( 8px )', // Stronger blur
          // WebkitBackdropFilter: 'blur( 8px )',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          margin: 'auto',
        }}
      >
        <Card variant='elevation' sx={{ width: '400px' }}>
          {card}
        </Card>
      </Box>
    </Layout>
  );
}
