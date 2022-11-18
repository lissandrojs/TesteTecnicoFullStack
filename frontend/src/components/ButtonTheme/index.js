import { Button} from "@mui/material"
import * as React from 'react';



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