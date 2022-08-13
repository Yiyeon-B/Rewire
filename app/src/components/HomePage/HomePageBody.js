import React from "react";
import {Box, Grid} from "@material-ui/core";
import "./HomePageBody.css";
import ThoughtForm from "../Thoughtform/ThoughtForm";
import ThoughtButton from "../Thoughtform/ThoughtButton";
import ThoughtPreview from "../ThoughtPreview/ThoughtPreview";

export default function HomePageBody() {


    const [shown, setShown] = React.useState(false);

    const handleClick = () => {
        setShown(!shown);
    };

    return (
        <div className={"big-container"}>
            <div className="titleText">
                <h2 data-testid="body-heading">Recently Added Thoughts</h2>
            </div>
            <Grid container style={{display: 'flex', alignItems: 'center',  justifyContent: 'center'}}>
                <Box
                    sx={{
                        bgcolor: "#F6D0D0",
                        height: "907px",
                        width: "1125px",
                        borderRadius: ".9em",
                        maxHeight: "1000px",
                        overflow: "auto"
                    }}
                >
                    <Grid container columns={{xs: 4, sm: 8, md: 12}}>
                        <Grid item xs={12} sm={12} md={4}>
                            <Box
                                sx={{
                                    marginLeft: "67px",
                                    marginRight: "67px",
                                    marginTop: "60px",
                                    height: "235px",
                                    width: "235px",
                                    bgcolor: "white",
                                    border: "3px solid gray",
                                    borderRadius: "2em",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "1rem",
                                }}
                            >
                                <ThoughtButton handleClick={handleClick}/>
                                {shown ? <ThoughtForm handleClick={handleClick} /> : <></>}
                            </Box>
                            <div id="add-thought-subtitle">
                                <h2>
                                    Add A Thought
                                </h2>
                            </div>
                        </Grid>
                        <ThoughtPreview />
                    </Grid>
                </Box>
            </Grid>
            <footer id="footer">
                Footer
            </footer>
        </div>
    );
};
