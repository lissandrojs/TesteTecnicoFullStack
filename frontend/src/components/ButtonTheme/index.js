import { Button, Icon, SvgIcon } from "@mui/material"
import * as React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';



const ButtonTheme =({currentTheme,handleSetCurrentTheme})=>{
    return(
       <>
         <Button 
          style={{
            position:"relative",
            bottom:"280px"
          }}
            variant="contained" 
            onClick={()=>handleSetCurrentTheme()}
            >
              {currentTheme === "light" ?  "light mode" : "dark mode" }
        </Button>
       </>
    )
}

export default ButtonTheme