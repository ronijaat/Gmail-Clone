import {Box,Typography} from '@mui/material'

import { useRouteError } from 'react-router-dom'

const ErrorComponent = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <Box>
        <Typography>Hey! there is something error in loading!!!</Typography>
    </Box>
  )
}

export default ErrorComponent