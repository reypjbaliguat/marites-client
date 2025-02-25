import React from 'react';
import { Box, Typography } from '@mui/material';

interface Props {
    children: React.ReactNode;
    headerText: string;
}

function AuthContainer({ children, headerText }: Props) {
    const logo = `${process.env.PUBLIC_URL}/assets/marites-logo.png`;
    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                flexDirection: 'column',
            }}
        >
            <img alt="logo" src={logo} height={100} width={200} />
            <Box
                sx={{
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: '#ffffff',
                    maxWidth: { xs: 270, sm: 400 },
                    width: '100%',
                    marginTop: 4,
                }}
            >
                <Typography variant="h5" gutterBottom>
                    {headerText}
                </Typography>
                {children}
            </Box>
        </Box>
    );
}

export default AuthContainer;
