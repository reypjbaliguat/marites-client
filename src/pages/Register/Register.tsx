import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { enqueueSnackbar } from 'notistack';
import { AuthForm, OTPForm } from '../../components/AuthForm';
import { RESEND_OTP, SIGN_UP } from '../../queries/auth';
import { AuthFormData } from '../../types/auth';

function Register() {
    const [signUp, { loading }] = useMutation(SIGN_UP);
    const [resendOTP] = useMutation(RESEND_OTP);
    const [page, setPage] = useState('register');
    const [otpEmail, setOTPEmail] = useState('');
    const handleSubmit = async (data: AuthFormData) => {
        const { password, confirmPassword, email } = data;
        if (password !== confirmPassword) {
            enqueueSnackbar("Passwords don't match!", {
                variant: 'alert',
                severity: 'error',
            });
            return;
        }

        try {
            const { data } = await signUp({
                variables: { email, password },
            });
            enqueueSnackbar(data.signUp, {
                variant: 'alert',
                severity: 'success',
            });
            setOTPEmail(email);
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

    const handleResend = async () => {
        try {
            const { data: resendData } = await resendOTP({
                variables: { email: otpEmail },
            });
            enqueueSnackbar(resendData.resendOTP, {
                variant: 'alert',
                severity: 'success',
            });
        } catch (err) {
            if (err instanceof Error) {
                enqueueSnackbar(err.message, {
                    variant: 'alert',
                    severity: 'error',
                });
            }
        }
    };

    switch (page) {
        case 'register':
            return (
                <AuthForm
                    submitLoading={loading}
                    handleFormSubmit={handleSubmit}
                    isLogin={false}
                />
            );
        case 'otp':
            return <OTPForm otpEmail={otpEmail} onResend={handleResend} />;
        default:
            return <></>;
    }
}

export default Register;
