import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, ImageListItem, Link, Typography } from '@mui/material';
import { theme, CustomTextField } from './../utils/Theme.js';
import { ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" align="center" {...props} color="secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://inxelo.aero/">
                Inxelo
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function generateToken(length) {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    let primitiveToken = [];
    for (let i = 0; i < length; i++) {
        let j = (Math.random() * (chars.length - 1)).toFixed(0);
        primitiveToken[i] = chars[j];
    }
    return primitiveToken.join("");
}

function storeToken() {
    let tokenStorage = generateToken(512);
    document.cookie = "Token=" + tokenStorage;
}

const Login = () => {
    useEffect(() => {
        document.title = 'Login';
    });

    const navigate = useNavigate();

    const handleSubmit = () => {
        storeToken();
        navigate('/dashboard');
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" className='dashboard-main'>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <ImageListItem sx={{ width: 300, height: 250 }}>
                        <img
                            alt='plane'
                            src={window.location.origin + '/plane.png'}
                        />
                    </ImageListItem>

                    <Typography component="h1" variant="h5" color='secondary'>
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <CustomTextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            color='secondary'
                            sx={
                                {
                                    label: { color: 'grey.main' },
                                    input: { color: 'white' }
                                }
                            }

                        />
                        <CustomTextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            color='secondary'
                            sx={
                                {
                                    label: { color: 'grey.main' },
                                    input: { color: 'white' }
                                }
                            }
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            color="secondary"
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/" variant="body2">
                                    {"Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider >
    );
};
export default Login;