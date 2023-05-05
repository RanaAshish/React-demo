import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './components/user-list.component';
import UserProfile from './components/user-profile.component';
import PageNotFound from './components/page-not-found.component';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='user/:id' element={<UserProfile />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
