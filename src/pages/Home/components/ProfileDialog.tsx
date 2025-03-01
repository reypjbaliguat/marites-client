import {
    Avatar,
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    TextField,
    Toolbar,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

interface Props {
    open: boolean;
    handleClose: () => void;
}

function ProfileDialog({ open, handleClose }: Props) {
    return (
        <Dialog
            className="relative"
            maxWidth={'sm'}
            open={open}
            onClose={handleClose}
            fullWidth
        >
            <div className="flex w-full items-center border-b">
                <DialogTitle>Profile</DialogTitle>
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </div>

            <DialogContent>
                <div className="flex items-center flex-wrap">
                    <span className="text-sm text-gray-500 mb-3 w-full">
                        Profile Picture
                    </span>
                    <div className="flex items-center gap-x-8">
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 80, height: 80 }}
                        />
                        <div className="flex gap-x-3">
                            <Button variant="outlined"> Change Picture</Button>
                            <Button variant="outlined" color="error">
                                Delete Picture
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex w-full my-6 gap-y-3">
                    <TextField placeholder="Name.." label="Name" fullWidth />
                </div>
                <div className="flex w-full justify-end">
                    <Button color="primary" variant="contained">
                        Edit
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default ProfileDialog;
