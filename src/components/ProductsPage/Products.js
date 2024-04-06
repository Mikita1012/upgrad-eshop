import '../ProductsPage/Products.css'
import { ShoppingCart } from '@mui/icons-material'
import Search from '@mui/icons-material/Search'
import { AppBar, Box, Button, CardActions, CardContent, Container, Toolbar, Typography, Card, ToggleButtonGroup, ToggleButton } from '@mui/material'
import React, { Fragment } from 'react'
import NavigationBar from '../navigationbar/NavigationBar';
import Categories from '../categories/Categories'




function Products() {
   

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    const card = (
        <Fragment>
            <CardContent sx={{width: '300px', height: '300px'}}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Fragment>
    );
    return (
        <>
            <NavigationBar />
            <Categories/>
              
                <Box className="formContainer">
                    <Box>
                        <Card variant="outlined">{card}</Card>
                    </Box>
                    <Box >
                        <Card variant="outlined">{card}</Card>
                    </Box>
                    <Box >
                        <Card variant="outlined">{card}</Card>
                    </Box>
                    <Box >
                        <Card variant="outlined">{card}</Card>
                    </Box>
                </Box>
                <Box className="formContainer">
                    <Box >
                        <Card variant="outlined">{card}</Card>
                    </Box>
                    <Box >
                        <Card variant="outlined">{card}</Card>
                    </Box>
                    <Box >
                        <Card variant="outlined">{card}</Card>
                    </Box>
                    <Box >
                        <Card variant="outlined">{card}</Card>
                    </Box>
                </Box>
        </>
    )
}

export default Products