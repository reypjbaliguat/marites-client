import { useEffect, useState } from 'react';
import { AuthContainer } from '../layouts';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { useMutation } from '@apollo/client';
import { VERIFY_OTP } from '../../queries/auth';
import { enqueueSnackbar } from 'notistack';
import { Alert, Button } from '@mui/material';

interface Props {
    otpEmail: string;
    onResend: () => void;
}

function OTPForm({ otpEmail, onResend }: Props) {
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(60); // 1 minute
    const [verifyOTP] = useMutation(VERIFY_OTP);

    useEffect(() => {
        if (otp.length === 4) {
            handleVerifyOtp();
        }
    }, [otp]);

    useEffect(() => {
        if (timer > 0) {
            const intervalId = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(intervalId); // Cleanup interval
        }
    }, [timer]);

    const handleResend = () => {
        setTimer(60); // Reset the timer to 60 seconds
        if (onResend) {
            onResend(); // Call the resend function
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const { data } = await verifyOTP({
                variables: {
                    otpCode: otp,
                    email: otpEmail,
                },
            });

            enqueueSnackbar(
                `User registered successfully! Welcome, ${data.verifyOTP.email}`,
                {
                    variant: 'alert',
                    severity: 'success',
                },
            );
            localStorage.setItem('token', data.verifyOTP.token);
            localStorage.setItem('email', data.verifyOTP.email);
            window.location.href = '/';
        } catch (err) {
            if (err instanceof Error) {
                enqueueSnackbar(err?.message, {
                    variant: 'alert',
                    severity: 'error',
                });
            }
        }
    };

    return (
        <AuthContainer headerText={'Verify OTP'}>
            <Alert severity="success" sx={{ marginBottom: 2 }}>
                OTP sent successfully. Please check your email.
            </Alert>
            <MuiOtpInput
                TextFieldsProps={{ type: 'number' }}
                value={otp}
                onChange={setOtp}
            />
            <Button
                disabled={timer > 0}
                sx={{ marginTop: 2 }}
                fullWidth
                variant="contained"
                onClick={handleResend}
            >
                {timer > 0 ? `Resend OTP in ${timer} seconds` : 'Resend OTP'}
            </Button>
        </AuthContainer>
    );
}

export default OTPForm;
