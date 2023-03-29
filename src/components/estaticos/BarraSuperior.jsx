import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { flexbox } from '@mui/system'
import MenuCuenta from '../MenuCuenta'


export default function BarraSuperior()  {

    return(
        <>
            <AppBar 
            position='relative'
            color='secondary'>
                <Toolbar>
                    <Typography  variant='h5'  sx={ {flexGrow: 1 }}>    
                    </Typography>
                  
                    <MenuCuenta />

                </Toolbar>
            </AppBar>
            
        </>
    )

}