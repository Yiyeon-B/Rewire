/*
 * © 2021 Thoughtworks, Inc.
 */

import React, {useEffect, useState} from 'react';
import knowYourRightsService from "../services/knowYourRightsService";
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Box} from "@material-ui/core";
import AddInfo from "./AddInfo";


const useStyles = makeStyles((theme) => ({

    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    addInfoHeading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightMedium,
        textAlign: "left"
    },
    addInfoDetails: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        textAlign: "left"

    }
}));


function KnowYourRights() {

    const [knowYourRightsData, setKnowYourRightsData] = useState(undefined)
    const classes = useStyles();


    useEffect(() => {
        getKnowYourRightsData();
    }, []);

    const getKnowYourRightsData = async () => {
        const result = await knowYourRightsService.getKnowYourRightsContent();
        setKnowYourRightsData(result);
    }
    return (
        <div data-testid="kyrContent" key="kyr-0">

            <h1> Know Your Rights </h1>


            {knowYourRightsData?.map((x, index) => {
                return (
                    <div  className={classes.root} key={index + "-0"}>
                        <Box mx={5} my={2}>
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <h5>{x.title}
                                        <Typography className={classes.heading}>
                                            {x.summary}
                                        </Typography>
                                    </h5>
                                </AccordionSummary>

                                <AccordionDetails className={classes.heading}>

                                        <ul key={index} className={classes.addInfoHeading} > Additional
                                            Info {x.additionalInfoList.map((addInfoItem, index) => {
                                                return (
                                                     <li
                                                        key={index}
                                                        data-testid="addInfo"
                                                        className={classes.addInfoDetails}><AddInfo
                                                        item={addInfoItem}/></li>)
                                            })}
                                        </ul>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </div>
                )
            })}

        </div>

    )
};


export default KnowYourRights;
