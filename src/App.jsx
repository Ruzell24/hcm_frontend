import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './modules/login';
import SignUp from './modules/sign-up';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Dashboard from './modules/dashboard';
import PrivateRoute from './modules/shared/utils/PrivateRoute';

function App() {
  const queryClient = new QueryClient()
  return (
   <QueryClientProvider client={queryClient}>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
   </QueryClientProvider>
  );
}

export default App;
