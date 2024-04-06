import React from 'react'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'

function Categories() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <>
            <ToggleButtonGroup
                color="warning"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{ backgroundColor: 'green', margin: 'auto', display: 'flex', textAlign: 'center', justifyContent: 'center' }}
            >
                <ToggleButton value="web">Web</ToggleButton>
                <ToggleButton value="android">Android</ToggleButton>
                <ToggleButton value="ios">iOS</ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}

export default Categories