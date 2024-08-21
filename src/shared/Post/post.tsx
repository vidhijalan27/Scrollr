import React, { useState, useEffect, MouseEvent } from 'react';
import { Box, Typography, IconButton, Menu, MenuItem, Modal, Radio, RadioGroup, FormControlLabel, FormControl, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ReportIcon from '@mui/icons-material/Report';
import HideIcon from '@mui/icons-material/VisibilityOff';
import './postStyles.css';

interface PostProps {
    img: string;
    text: string;
    id: string;
}

const Post: React.FC<PostProps> = ({ img, text, id }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(true);
    const [reportModalOpen, setReportModalOpen] = useState(false);
    const [reportReason, setReportReason] = useState('');

    const open = Boolean(anchorEl);

    useEffect(() => {
        const hiddenPosts = JSON.parse(localStorage.getItem('hiddenPosts') || '[]');
        if (hiddenPosts.includes(id)) {
            setIsVisible(false);
        }
    }, [id]);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleReport = () => {
        setReportModalOpen(true);
        handleClose();
    };

    const handleHide = () => {
        const hiddenPosts = JSON.parse(localStorage.getItem('hiddenPosts') || '[]');
        hiddenPosts.push(id);
        localStorage.setItem('hiddenPosts', JSON.stringify(hiddenPosts));
        setIsVisible(false);
        setReportModalOpen(false);
    };

    const handleReportReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReportReason(event.target.value);
    };

    if (!isVisible) return null;

    return (
        <Box className="post-container">
            <Box className="post-box">
                <Box className="post-content">
                    <Box className="post-header">
                        <AccountCircleIcon className="post-icon" />
                        <Typography className="post-text">
                            {text}
                        </Typography>
                        <Box className="post-more-icon">
                            <IconButton onClick={handleClick}>
                                <MoreHorizIcon className="dot" />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                classes={{ paper: 'menu-paper' }}
                            >
                                <MenuItem onClick={handleReport} className="menu-item menu-item-padding-bottom">
                                    <ReportIcon className="icon" />
                                    Report
                                </MenuItem>
                                <MenuItem onClick={handleHide} className="menu-item menu-item-padding-top">
                                    <HideIcon className="icon" />
                                    Hide
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                    <Box className="post-image-container">
                        <img
                            src={img}
                            alt="Post Content"
                            className="post-image"
                        />
                    </Box>
                </Box>
            </Box>

            <Modal
                open={reportModalOpen}
                onClose={() => setReportModalOpen(false)}
                aria-labelledby="report-modal-title"
                aria-describedby="report-modal-description"
            >
                <Box className="report-modal">
                    <Typography 
                        id="report-modal-title" 
                        variant="h6" 
                        component="h2" 
                        gutterBottom 
                        className="report-modal-title"
                    >
                        Why are you reporting this post?
                    </Typography>
                    <FormControl component="fieldset">
                        <RadioGroup 
                            value={reportReason} 
                            onChange={handleReportReasonChange} 
                            className="radio-group-padding"
                        >
                            <FormControlLabel 
                                value="dislike" 
                                control={<Radio className="radio-checked" />} 
                                label="I just don't like it" 
                                className="form-control-label" 
                            />
                            <FormControlLabel 
                                value="bullying" 
                                control={<Radio className="radio-checked" />} 
                                label="Bullying or Harassment" 
                                className="form-control-label" 
                            />
                            <FormControlLabel 
                                value="explicit" 
                                control={<Radio className="radio-checked" />} 
                                label="Explicit Content" 
                                className="form-control-label" 
                            />
                        </RadioGroup>
                        <Box className="box-button">
                            <Button 
                                onClick={handleHide} 
                                variant="contained" 
                                className="submit-button"
                                disabled={!reportReason}
                            >
                                Submit
                            </Button>
                        </Box>
                    </FormControl>
                </Box>
            </Modal>

        </Box>
    );
}

export default Post;
