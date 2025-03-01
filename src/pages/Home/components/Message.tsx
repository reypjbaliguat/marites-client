import { Avatar } from '@mui/material';

interface Props {
    message: string;
    isMyMessage: boolean;
}

function Message({ message, isMyMessage }: Props) {
    return (
        <div
            className={`flex w-full items-end gap-x-3 ${isMyMessage ? 'justify-end' : 'justify-start'}`}
        >
            {!isMyMessage && (
                <Avatar
                    alt="j"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 40, height: 40 }}
                />
            )}
            <div
                className={`max-w-none md:max-w-[60%] p-3 flex flex-col bg-blue-500 rounded-xl ${isMyMessage ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            >
                <span className="font-medium">You </span>
                <span className="text-sm">{message}</span>
            </div>
            {isMyMessage && (
                <Avatar
                    alt="j"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 40, height: 40 }}
                />
            )}
        </div>
    );
}

export default Message;
