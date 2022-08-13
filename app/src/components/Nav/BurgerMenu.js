import React from "react";
import {Box} from "@material-ui/core";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HelpIcon from '@mui/icons-material/Help';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const option1 = [
    'FAQ',

];
const option2 = [
    'Tutorial',

];

const ITEM_HEIGHT = 48;


export default function BurgerMenu({setFAQModal,tutorialModalOpenStatus}) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleFAQ = () => {
        setFAQModal(true);
        handleClose();
    }
    const handleTutorial = () => {
        tutorialModalOpenStatus(true);
        handleClose();
    }

    return (
        <Box className="burgerMenu" display="flex" flexDirection="column">
            <div>
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    sx={{color: "#EFA3A3"}}
                    data-testid={"burger-button"}
                >
                    <MenuRoundedIcon
                        sx={{
                            fontSize: "80px",
                            color: "pink",
                            stroke: "lightgray",
                            strokeWidth: "1",
                        }}/>
                </IconButton>

                <Menu
                    id="long-menu"
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '217px',
                            height: '130px',
                        },
                    }}
                    data-testid={'burger-menu'}
                >
                    {option2.map((option2) => (
                        <MenuItem data-testid="tutorial-button" key={option2}
                                  sx={{justifyContent: 'center', fontSize: '27.5px'}} onClick={handleTutorial}>
                            <OndemandVideoIcon sx={{mr: 2.4, fontSize: '35px'}}/> {option2}
                        </MenuItem>
                    ))}

                    {option1.map((option) => (
                        <MenuItem data-testid="faq-button" key={option}
                                  sx={{justifyContent: 'left', fontSize: '27.5px'}} onClick={handleFAQ}>
                            <HelpIcon sx={{mr: 2.4, fontSize: '35px', marginLeft: '21px'}}/> {option}
                        </MenuItem>
                    ))}

                </Menu>
            </div>
        </Box>
    );
};
