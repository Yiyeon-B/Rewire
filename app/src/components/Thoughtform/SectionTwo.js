import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import {saveThought} from "../../services/cbtService";

const SectionTwo = ({ handleClick, prevStep, nextStep, handleChange, values }) => {


  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  const submitForm = async () => {
    await saveThought(values);
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
            label="Do I have evidence to support that?"
            onChange={handleChange('thirdThought')}
            multiline
            minRows={10}
            maxRows={10}
            defaultValue={values.thirdThought}
            variant="outlined"
          />
          <br />
          <br />
          <TextField style = {{width: "445px", marginLeft: "30px", marginTop: "20px", borderRadius: "20px", backgroundColor: "#DACDCD"}}  className="inputRounded"
            label="Is there another way to look at the trigger?"
            onChange={handleChange('fourthThought')}
            multiline
            defaultValue={values.fourthThought}
            minRows={10}
            maxRows={10}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={ Previous } variant={"contained"} style={{marginBottom:"26px", marginRight:"216px"}}>
            <Typography style={{fontSize:"29px", textTransform: "capitalize"}}>
              Back
            </Typography>
          </Button>
          <Button onClick={ submitForm } type="submit" variant={"contained"} style={{marginBottom:"26px", marginRight:"52px"}}>
            <Typography style={{fontSize:"29px", textTransform: "capitalize"}}>
              Submit
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default SectionTwo

