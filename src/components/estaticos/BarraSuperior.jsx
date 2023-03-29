import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuCuenta from '../MenuCuenta'


export default function BarraSuperior()  {

    return(
        <>
            <AppBar position='static'>
                <Toolbar>
                <MenuCuenta />

                </Toolbar>
            </AppBar>
            
        </>
    )

}