import React from 'react';
import {
    Modal,
    Box,
    Typography,
    Grid
} from '@material-ui/core';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: '#D6C4C4',
    boxShadow: 24,
    p: 4,
    borderRadius: '27px',
    padding: '3%'
};

const TutorialModal = ({showTutorialModal, tutorialModalOpenStatus}) => {
    const handleClose = () => tutorialModalOpenStatus(false);

    return <> {showTutorialModal ? <div>
        <Modal
            open={showTutorialModal}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box sx={style}>

                <Box style={{fontSize: 28, marginBottom: 25}}>
                    <Typography id='modal-modal-title' style={{fontSize: '28px', fontWeight: 'bold', fontFamily: 'Arial'}} align='center' component='h2'>
                        Tutorial
                    </Typography>
                </Box>

                <div style={{padding: 15}}>
                    <Grid container justifyContent='center'>
                        <iframe width='853' height='480' src='https://www.youtube.com/embed/NwJ2KuVZC3U'
                                title='video'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen>
                            data-testid='tutorial-video'
                        </iframe>
                    </Grid>
                </div>

                <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
                    <Box border={1} borderColor='grey.500' borderRadius='27px' style={{padding: 15, width: 853}}>
                        <Typography id='modal-modal-description' sx={{mt: 2}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </Box>
                </Box>

                <br/>
            </Box>
        </Modal>
    </div> : null} </>;
}

export default TutorialModal;