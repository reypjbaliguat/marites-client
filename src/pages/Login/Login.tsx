import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { enqueueSnackbar } from 'notistack';
import { AuthForm, OTPForm } from '../../components/AuthForm';
import { LOGIN, RESEND_OTP } from '../../queries/auth';
import { AuthFormData } from '../../types/auth';

function Login() {
    const [login, { loading }] = useMutation(LOGIN);
    const [page, setPage] = useState('login');
    const [otpEmail, setOTPEmail] = useState('');
    const [resendOTP] = useMutation(RESEND_OTP);
    const handleLogin = async (data: AuthFormData) => {
        const { email, password } = data;
        try {
            const { data } = await login({ variables: { email, password } });
            localStorage.setItem('token', data.login.token);
            localStorage.setItem('email', data.login.email);
            window.location.href = '/';
        } catch (err) {
            if (err instanceof Error) {
                if (err.message.includes('verification')) {
                    setOTPEmail(email);
                }
                enqueueSnackbar(err.message, {
                    variant: 'alert',
                    severity: 'error',
                });
            }
        }
    };

    const handleResend = async () => {
        try {
            const { data: resendData } = await resendOTP({
                variables: { email: otpEmail },
            });
            enqueueSnackbar(resendData.resendOTP, {
                variant: 'alert',
                severity: 'success',
            });
            setPage('otp');
        } catch (err) {
            if (err instanceof Error) {
                enqueueSnackbar(err.message, {
                    variant: 'alert',
                    severity: 'error',
                });
            }
        }
    };

    if (localStorage.getItem('token')) {
        window.location.href = '/';
    }
    useEffect(() => {
        if (otpEmail) {
            handleResend();
        }
    }, [otpEmail]);
    switch (page) {
        case 'login':
            return (
                <AuthForm
                    handleFormSubmit={handleLogin}
                    submitLoading={loading}
                />
            );
        case 'otp':
            return <OTPForm otpEmail={otpEmail} onResend={handleResend} />;
        default:
            return <></>;
    }
}

export default Login;
