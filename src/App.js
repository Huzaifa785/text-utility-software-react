import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextField from './components/TextField';
import Alert from './components/Alert';
import './App.css';

export default function App() {
    const [mode, setMode] = useState('light')
    const [alert, setAlert] = useState(null)

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.background = '#212529'
            document.body.style.color = 'white'
        }
        else {
            setMode('light')
            document.body.style.background = 'white'
            document.body.style.color = '#212529'
        }
    }
    return (
        <>
        <Navbar mode = {mode} toggleMode = {toggleMode} />
        <div className="container mt-3">
            <Alert alert = {alert} />
        </div>
        <div className="container mt-5">
            <TextField showAlert = {showAlert} setAlert = {setAlert} mode = {mode} />
        </div>
        </>
    )
}

