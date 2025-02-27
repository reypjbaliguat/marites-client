import { Avatar, Button, IconButton, TextField } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import SendIcon from '@mui/icons-material/Send';

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
                <div className="flex w-full items-end gap-x-3">
                    <Avatar
                        alt="j"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 40, height: 40 }}
                    />
                    <div className="max-w-none md:max-w-[60%] p-3 flex flex-col bg-gray-100 rounded-xl">
                        <span className="font-medium">Moby </span>
                        <span className="text-sm">
                            Maroa Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. In reiciendis quae odio
                            dignissimos reprehenderit sint dolores nihil quod
                            nam consectetur! Porro alias voluptas esse
                            voluptatum, blanditiis qui incidunt quidem saepe!
                        </span>
                    </div>
                </div>
                <div className="flex w-full justify-end items-end gap-x-3">
                    <div className="max-w-none md:max-w-[60%] p-3 flex flex-col bg-blue-500 text-white rounded-xl">
                        <span className="font-medium">You </span>
                        <span className="text-sm">
                            Maroa Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. In reiciendis quae odio
                            dignissimos reprehenderit sint dolores nihil quod
                            nam consectetur! Porro alias voluptas esse
                            voluptatum, blanditiis qui incidunt quidem saepe!
                        </span>
                    </div>
                    <Avatar
                        alt="j"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 40, height: 40 }}
                    />
                </div>
                <div className="flex w-full justify-end items-end gap-x-3">
                    <div className="max-w-none md:max-w-[60%] p-3 flex flex-col bg-blue-500 text-white rounded-xl">
                        <span className="font-medium">You </span>
                        <span className="text-sm">
                            Maroa Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. In reiciendis quae odio
                            dignissimos reprehenderit sint dolores nihil quod
                            nam consectetur! Porro alias voluptas esse
                            voluptatum, blanditiis qui incidunt quidem saepe!
                        </span>
                    </div>
                    <Avatar
                        alt="j"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 40, height: 40 }}
                    />
                </div>
                <div className="flex w-full justify-end items-end gap-x-3">
                    <div className="max-w-none md:max-w-[60%] p-3 flex flex-col bg-blue-500 text-white rounded-xl">
                        <span className="font-medium">You </span>
                        <span className="text-sm">
                            Maroa Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. In reiciendis quae odio
                            dignissimos reprehenderit sint dolores nihil quod
                            nam consectetur! Porro alias voluptas esse
                            voluptatum, blanditiis qui incidunt quidem saepe!
                        </span>
                    </div>
                    <Avatar
                        alt="j"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 40, height: 40 }}
                    />
                </div>
                <div className="flex w-full justify-end items-end gap-x-3">
                    <div className="max-w-none md:max-w-[60%] p-3 flex flex-col bg-blue-500 text-white rounded-xl">
                        <span className="font-medium">You </span>
                        <span className="text-sm">
                            Maroa Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. In reiciendis quae odio
                            dignissimos reprehenderit sint dolores nihil quod
                            nam consectetur! Porro alias voluptas esse
                            voluptatum, blanditiis qui incidunt quidem saepe!
                        </span>
                    </div>
                    <Avatar
                        alt="j"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 40, height: 40 }}
                    />
                </div>
                <div className="flex w-full justify-end items-end gap-x-3">
                    <div className="max-w-none md:max-w-[60%] p-3 flex flex-col bg-blue-500 text-white rounded-xl">
                        <span className="font-medium">You </span>
                        <span className="text-sm">
                            Maroa Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. In reiciendis quae odio
                            dignissimos reprehenderit sint dolores nihil quod
                            nam consectetur! Porro alias voluptas esse
                            voluptatum, blanditiis qui incidunt quidem saepe!
                        </span>
                    </div>
                    <Avatar
                        alt="j"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 40, height: 40 }}
                    />
                </div>
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
