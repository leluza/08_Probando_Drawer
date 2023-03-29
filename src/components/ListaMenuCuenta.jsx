import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';

export default function ListaMenuCuenta(){
    return (
        <>
            <Box sx={ { width:250 , bgcolor: "lightgray"  } } >
                <nav>
                    <List>
                        <ListItem >
                            <ListItemText primary= "            CUENTA " />
                        </ListItem>

                        <ListItemButton 
                          component="a"
                          href="#perfil">
                            <ListItemIcon>
                                <PersonOutlineRoundedIcon></PersonOutlineRoundedIcon>
                            </ListItemIcon>
                            <ListItemText primary= "Perfil" />
                        </ListItemButton>

                        <ListItemButton 
                          component="a"
                          href="#contraseña">
                            <ListItemIcon>
                                <VpnKeyRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary= "Contraseña" />
                        </ListItemButton>

                        <Divider></Divider>
                        
                        <ListItemButton 
                          component="a"
                          href="#salir"> 
                            <ListItemIcon>
                                <PowerSettingsNewRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary= "Salir" />
                        </ListItemButton>

                    </List>
                </nav>
            </Box>
       
        </>
    )
}