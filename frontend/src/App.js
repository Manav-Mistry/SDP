import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import { getAllItems, reset } from "../src/features/Items/itemSlice"

import './App.css';
import AddItem from './pages/form/AddItem';
import ViewAllItems from './pages/ViewAllItems';

function App() {

  const {items, isLoading, isError, isSuccess} = useSelector((state) => state.item)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(reset())
  }, [isSuccess, isError, isLoading, items])

  useEffect(() => {
    dispatch(getAllItems())
  }, []);

  return (
    <>
     <Router >       
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/viewAllItems' element={<ViewAllItems />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/addItem' element={<AddItem />} />
        </Routes>
    </Router>
    <ToastContainer />
      
    </>
  );
}

export default App;
