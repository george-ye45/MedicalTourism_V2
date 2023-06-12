import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";
import { Typewriter } from "react-simple-typewriter";
import Paper from '@mui/material/Paper';
import { Button, Grid, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FormControlLabel from '@mui/material/FormControlLabel';
import ListItemButton from '@mui/material/ListItemButton';



export const Form = () => {
    const q1 = "Which K-Beauty medical treatments are you interested in learning more about or considering?";
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    const treatments = [
        'Acne Scar Removal',
        'Skin Brightening Treatments',
        'Anti-Aging Treatments',
        'Non-Surgical Facelift',
        'Chemical Peels',
        'Laser Skin Resurfacing',
        'Micro-Needling Treatments',
        'BB Glow Treatments',
        'Non-Surgical Rhinoplasty',
        'Skin Tightening Treatments',
        'Other'
    ];
    return (
        <HelmetProvider>
            <Paper elevation={3} sx={{
                backgroundColor: '#282828',
                borderRadius: '15px',
                padding: '20px',
                margin: '20px auto',
                maxWidth: '80vw',
            }}>
                <Grid container justifyContent={"center"} direction="column" spacing={2}>
                    <Grid item>
                        <Typography variant="h4">{q1}</Typography>
                    </Grid>
                    <Grid item>
                        <List dense sx={{
                            maxHeight: '60vh', // Adjust this value as needed
                            overflow: 'auto',
                        }}>
                            {treatments.map((treatment, index) => {
                                return (
                                    <ListItem key={index} onClick={handleToggle(index)}>
                                        <ListItemButton>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        edge="start"
                                                        checked={checked.indexOf(index) !== -1}
                                                        tabIndex={-1}
                                                        disableRipple
                                                        sx={{
                                                            color: '#FFFFFF',
                                                            '&$checked': {
                                                                color: '#FFFFFF',
                                                            },
                                                        }}
                                                    />
                                                }
                                                label={<ListItemText primary={treatment} sx={{ color: '#FFFFFF' }} />}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Grid>
                    <Grid item style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button sx={{
                            color: '#FFFFFF', borderColor: '#ffffff', '&:hover': {
                                borderColor: '#BBBBBB',  // Set the hover color here
                            },
                        }} variant="outlined">Next</Button>
                    </Grid>
                </Grid>
            </Paper>
        </HelmetProvider>
    );
};
