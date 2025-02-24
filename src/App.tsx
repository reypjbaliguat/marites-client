import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { client } from './apolloClient';
import PrivateRoute from './components/PrivateRoute';
import { SnackbarProvider } from 'notistack';
import StatusSnackbar from './components/StatusSnackBar';
import './App.css';
import { Register } from './pages/Register';
import { Login } from './pages/Login';

function App() {
    return (
        <ApolloProvider client={client}>
            <SnackbarProvider
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                Components={{ alert: StatusSnackbar }}
                maxSnack={3}
            >
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        {/* <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <Dashboard />
                                </PrivateRoute>
                            }
                        /> */}
                    </Routes>
                </Router>
            </SnackbarProvider>
        </ApolloProvider>
    );
}

export default App;
