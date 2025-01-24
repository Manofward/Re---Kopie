import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

/* {live && (code für livedemo Button)}

   der Code obendrüber sorgt dafür, dass der Livedemo Button nicht angezeigt wird wenn kein Link hinterlegt wurde in der Info.js
*/

function PortfolioBlock(props) {
   const {image, live, source, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
               {live && (
                  <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                     <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
                  </Box>
               )}
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;