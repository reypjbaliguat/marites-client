import { Avatar, IconButton, Tooltip } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useState } from 'react';
import ProfileDialog from './ProfileDialog';

function AvatarSection() {
    const [open, setOpen] = useState(false);

    const handleProfileClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <ProfileDialog open={open} handleClose={handleClose} />
            <div className="flex lg:flex-col justify-evenly v lg:justify-start items-center p-3 lg:p-6 divide-y gap-y-3">
                <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{
                        width: { lg: 60, xs: 44 },
                        height: { lg: 60, xs: 44 },
                    }}
                    className="lg:mb-6"
                />
                <Tooltip title="Go to profile page">
                    <IconButton onClick={handleProfileClick}>
                        <AccountBoxIcon
                            sx={{
                                width: {
                                    xl: 36,
                                    xs: 30,
                                },
                                height: {
                                    xl: 36,
                                    xs: 30,
                                },
                            }}
                        />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Click to logout">
                    <IconButton>
                        <ExitToAppIcon
                            sx={{
                                width: {
                                    xl: 36,
                                    xs: 30,
                                },
                                height: {
                                    xl: 36,
                                    xs: 30,
                                },
                            }}
                        />
                    </IconButton>
                </Tooltip>
            </div>
        </>
    );
}

export default AvatarSection;
