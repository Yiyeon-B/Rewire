import React from 'react';
import {
    Modal,
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Link,

} from '@material-ui/core';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./FAQ.css";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 806,
    boxShadow: 24,
    p: 4,
    pb: 40,
    paddingTop: 24,
    paddingBottom: 74,
    paddingRight: 92,
    paddingLeft: 92,
    borderRadius: 20,
    fontSize: 21,
    fontWeight: 'Bold',
    bgcolor: "#d6c4c4"
};

function FAQ({showFAQModal, setFAQModal}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleClose = () => {
        setExpanded(false);
        setFAQModal(false);
    }

    return(
        <Modal
            open={showFAQModal}
            onClose={handleClose}
            aria-labelledby="FAQ"
        >
            <Box sx={style}>
                <Typography data-testid="Accordion-header" style={{paddingLeft: "271px", paddingBottom: "10px", fontSize: 28, fontWeight: "bold", fontFamily: "Arial"}}>FAQ</Typography>
                    <Accordion style={{bgcolor: "white", marginBottom: 0}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography style={{fontWeight: "bold"}}>
                                What is Cognitive Behavioral Therapy (CBT)?
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Cognitive behavioral therapy (CBT) is a common type of talk therapy (psychotherapy). You work with a mental health counselor (psychotherapist or therapist) in a structured way, attending a limited number of sessions. CBT helps you become aware of inaccurate or negative thinking so you can view challenging situations more clearly and respond to them in a more effective way.
                                <div>
                                    <Link href="https://www.mayoclinic.org/tests-procedures/cognitive-behavioral-therapy/about/pac-20384610" target="_blank" underline="always" color="primary">Learn more about CBT here!</Link>
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{bgcolor: "white", marginBottom: 0, marginTop: 0}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography style={{fontWeight: "bold"}}>
                                Should I work with a therapist?
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                It is advised that you have been or will be working with a therapist in the future. This application is best used for therapeutic analysis and self-reflection and can help a great deal with therapy sessions.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{bgcolor: "white", marginBottom: 0, marginTop: 0}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography style={{fontWeight: "bold"}}>
                                What is a negative thought?
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                A negative thought is a thought that is self defeating and
                                generates negative emotions such as anxiety, frustration,
                                sadness, and anger.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{bgcolor: "white", marginBottom: 0, marginTop: 0}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography style={{fontWeight: "bold"}}>
                                Is the negative thought true?
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Question if the negative thought is really true
                                or if its something you want to be true.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{bgcolor: "white", marginBottom: 0, marginTop: 0}} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5bh-content"
                            id="panel5bh-header"
                        >
                            <Typography style={{fontWeight: "bold"}}>
                                Is there evidence to support that?
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Is there hard proof that you have that can without
                                a doubt prove that your negative thoughts are true?
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{bgcolor: "white", marginBottom: 0, marginTop: 0}} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel6bh-content"
                            id="panel6bh-header"
                        >
                            <Typography style={{fontWeight: "bold"}}>
                                Is there another way to look at the situation or your initial thought?
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                What other perspective could you use to
                                look at this situation.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
            </Box>
        </Modal>
    );
}

export default FAQ;