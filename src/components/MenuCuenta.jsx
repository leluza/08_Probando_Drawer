import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import ListaMenuCuenta from "./ListaMenuCuenta";

export default function MenuCuenta(){
    
    const [open, setOpen] = useState(false); 

    return(
        <>
            <Button  
            variant="contained"
            onClick={ ()=> setOpen(true)}
            >
                Cuenta</Button>

            <Drawer
            open={open}
            onClose={()=> setOpen(false)}
            anchor="right"
            >
                <ListaMenuCuenta />
            </Drawer>
            
        </>
    )
}

