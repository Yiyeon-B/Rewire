import React from "react";
import "./Nav.css";
import {AppBar, Container, Toolbar, Typography} from "@material-ui/core";
import BurgerMenu from "./BurgerMenu";


export default function Nav({setFAQModal, tutorialModalOpenStatus}) {
        return (
            <AppBar data-testid ="nav-bar" position="static" id="appBar" className="navBar">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography className="logoText"
                                    data-testid="logo-typography"
                                    style={{color: "black", textDecoration: "none", textTransform: 'capitalize'}}
                                    variant="h2"
                                    noWrap
                                    component="a"
                                    href="/"

                        >
                            <Typography display="inline" style={{
                                color: "#B66E6E",
                                textDecoration: "none",
                                textTransform: 'capitalize',
                                fontSize: "60px",
                            }}>/
                            </Typography>Rewire
                        </Typography>
                        <BurgerMenu setFAQModal={setFAQModal} tutorialModalOpenStatus={tutorialModalOpenStatus}/>
                    </Toolbar>
                </Container>
            </AppBar>
        )
    }
