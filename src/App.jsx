import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './modules/login';
import SignUp from './modules/sign-up';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

function App() {
  const queryClient = new QueryClient()
  return (
   <QueryClientProvider client={queryClient}>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
   </QueryClientProvider>
  );
}

export default App;
