import { Button, IconButton, TextField } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import SendIcon from '@mui/icons-material/Send';
import Message from './Message';

function MessageSection() {
    const handleCall = () => {
        console.log('call');
    };
    return (
        <div className="flex flex-col h-full relative overflow-y-auto max-h-[calc(100vh-234px)] lg:max-h-[calc(100vh-48px)]">
            <div className="p-3 lg:px-6 lg:py-8 border-b-slate-200 border-b w-full flex justify-between items-center grow-0">
                <span className="font-medium"> Watitiw </span>
                <IconButton onClick={handleCall}>
                    <CallIcon />
                </IconButton>
            </div>

            <div className="p-3 lg:p-6 flex flex-col grow rounded-br-xl gap-y-3 lg:mb-[104px]">
                <Message
                    message="Maroa Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. In reiciendis quae odio
                            dignissimos reprehenderit sint dolores nihil quod
                            nam consectetur! Porro alias voluptas esse
                            voluptatum, blanditiis qui incidunt quidem saepe!"
                    isMyMessage={false}
                />
                <Message
                    message="Maroa Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. In reiciendis quae odio
                            dignissimos reprehenderit sint dolores nihil quod
                            nam consectetur! Porro alias voluptas esse
                            voluptatum, blanditiis qui incidunt quidem saepe!"
                    isMyMessage={true}
                />
            </div>
            <div className="sticky bg-white bottom-0 flex w-full gap-x-3 lg:p-6 p-3 items-center">
                <div className="flex grow">
                    <TextField fullWidth />{' '}
                </div>
                <div className="grow-0">
                    <Button color="primary" size="large" variant="contained">
                        <SendIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default MessageSection;
