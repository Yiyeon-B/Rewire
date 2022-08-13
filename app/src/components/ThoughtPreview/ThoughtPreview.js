import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import {getAllThoughts} from '../../services/cbtService';

export default class ThoughtPreview extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            thoughts: [],
            shown: false
        };
    }

    async componentDidMount() {
        this._isMounted = true;

        const result = await getAllThoughts();
        if (this._isMounted) {
                this.setState({thoughts: result});
        }
        
    }

    componentWillUnmount() {
        this._isMounted = false;

    }

    render() {
        const { thoughts } = this.state;
        
        return (
            <>
                {thoughts ? Object.keys(thoughts).reverse().map((key) => (
                    <Grid item xs={12} sm={12} md={4} key={key}>
                        <Box
                            sx={{
                                marginTop: "60px",
                                marginLeft: "67px",
                                marginRight: "67px",
                                marginBottom: "60px",
                                height: "235px",
                                width: "235px",
                                bgcolor: "white",
                                border: "3px solid gray",
                                borderRadius: "2em",
                                fontSize: "1rem",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingLeft: ".75rem",
                                paddingRight: ".75rem"
                            }}
                            data-testid={"preview-box-" + key}
                        >
                            <span style={{display: "block", fontSize: "1.1rem", fontWeight: "bold", height: "40%", fontFamily: "arial", marginTop: ".4rem"}}>
                                Negative Thought:
                                <Typography style={{
                                    boxSizing: "border-box",
                                    fontSize: ".95rem",
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 3,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    fontFamily: "arial",
                                    display: "-webkit-box"

                                }}>
                                    {thoughts[key]['firstThought']}
                                </Typography>
                            </span>
                            <hr style={{width: "85%", border: "1px solid gray"}}/>
                            <span style={{display: "block", fontSize: "1.1rem", fontWeight: "bold", height: "40%", fontFamily: "arial"}}>
                                Reframed Thought:
                                <Typography style={{
                                    boxSizing: "border-box",
                                    fontSize: ".95rem",
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 3,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    fontFamily: "arial",
                                    display: "-webkit-box"
                                }}
                                >
                                    {thoughts[key]['fourthThought']}
                                </Typography>
                            </span>
                        </Box>
                    </Grid>
                )) : <Typography>Loading...</Typography>}
            </>
        );

    }

}
