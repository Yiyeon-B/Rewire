import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";




const SectionOne = ({ handleClick, nextStep, handleChange, values }) => {
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const closeForm = (event, reason) => {
    if (reason && reason === "backdropClick") {
      handleClick();
    }
  }
  return (
    <div>
      <Dialog PaperProps={{style: {borderRadius: 27,background : '#D6C4C4', width : 556, height : 735}}} open onClose={ closeForm }>
        <DialogTitle>
          <Typography style={{paddingLeft: "145px", paddingTop: "15px", fontSize: 24, fontWeight: "bold", fontFamily: "Arial", textTransform: "capitalize"}}>
            Reframe a Thought
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
              style = {{width: "445px", marginLeft: "30px", marginTop: "10px", marginBottom: "20px", borderRadius: "20px", backgroundColor: "#DACDCD"}}
              className="inputRounded"
            label="What is your negative thought?"
            onChange={handleChange('firstThought')}
            multiline
            minRows={10}
            maxRows={10}
            defaultValue={values.firstThought}
            variant="outlined"
          />

          <br />
          <br />
          <TextField
              style = {{width: "445px", marginLeft: "30px", marginTop: "20px", borderRadius: "20px", backgroundColor: "#DACDCD"}}
              className="inputRounded"
            label="Is this negative thought true?"
            onChange={handleChange('secondThought')}
            multiline
            minRows={10}
            maxRows={10}
            defaultValue={values.secondThought}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={ Continue } aria-label="Next Button" variant={"contained"} style={{marginBottom:"26px", marginRight:"52px"}}>
            <Typography style={{fontSize:"29px", textTransform: "capitalize"}}>
              Next
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default SectionOne

