import {
    Avatar,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const dummyUsers = [
    {
        id: 0,
        name: 'Fucker',
        lastMessage: 'fuck me',
        seen: true,
        lastUpdate: `${new Date().getHours()}:${new Date().getMinutes()}`,
        isSelected: false,
    },
    {
        id: 1,
        name: 'Fucker 2',
        lastMessage: 'fuck me  2 jjqwieiqwjijsdi',
        seen: false,
        lastUpdate: `${new Date().getHours()}:${new Date().getMinutes()}`,
        isSelected: true,
    },
];

function MenuSection() {
    const handleClickSearch = () => {
        console.log('search');
    };
    const handleMouseDownSearch = () => {
        console.log('down');
    };
    const handleMouseUpSearch = () => {
        console.log('up');
    };

    return (
        <div className="flex flex-col divide-y">
            <div className="p-3 lg:p-6">
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-search">
                        Search User
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-search"
                        sx={{ borderRadius: 5 }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={'Search user'}
                                    onClick={handleClickSearch}
                                    onMouseDown={handleMouseDownSearch}
                                    onMouseUp={handleMouseUpSearch}
                                    edge="end"
                                >
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Search User"
                    />
                </FormControl>
            </div>

            {dummyUsers.map((dummy) => {
                return (
                    <div
                        key={dummy.id}
                        className={`hidden lg:grid py-4 px-3 xl:p-6 grid-cols-12 items-start ${dummy.isSelected && 'bg-gray-100'}`}
                    >
                        <div className="col-span-3">
                            <Avatar
                                alt="j"
                                src="/static/images/avatar/1.jpg"
                                sx={{
                                    width: {
                                        xl: 50,
                                        xs: 44,
                                    },
                                    height: {
                                        xl: 50,
                                        xs: 44,
                                    },
                                }}
                                className="mx-auto"
                            />
                        </div>
                        <div className="col-span-7 xl:col-span-8 flex flex-col">
                            <span className="font-medium">{dummy.name}</span>
                            <span className="truncate max-w-fit text-sm text-gray-500">
                                {dummy.lastMessage}
                            </span>
                        </div>
                        <div className="col-span-1">
                            <span className="text-sm text-gray-500">
                                {dummy.lastUpdate.toString()}
                            </span>
                        </div>
                    </div>
                );
            })}
            <div className="flex lg:hidden p-3 gap-x-3">
                {dummyUsers.map((dummy) => {
                    return (
                        <div key={dummy.id}>
                            {' '}
                            <Avatar
                                alt="j"
                                src="/static/images/avatar/1.jpg"
                                sx={{
                                    width: 44,
                                    height: 44,
                                }}
                            />{' '}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MenuSection;
