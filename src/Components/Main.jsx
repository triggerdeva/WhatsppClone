import { Grid } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import "./Main.css"

function Main() {
    return (
        <div>
            <Grid container>
                <Grid item xs={20}>
                    <Navbar />
                </Grid>
                <Grid item xs={5}>
                    <Sidebar />
                </Grid>
                <Grid item xs={5}>
                    <div className="main-right">
                        deva
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Main