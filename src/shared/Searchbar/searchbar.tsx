import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './searchbarStyles.css';
interface SearchbarProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onChange }) => {
    return (
        <Box className="searchbar-container" >
            <TextField 
                placeholder="Search"
                onChange={onChange}
                className="searchbar"
                sx={{
                    '& .MuiInputBase-root': {
                        height: '100%', 
                        borderRadius: '30px',
                        backgroundColor: '#F4E9DC',
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#F4E9DC', 
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#F4E9DC', 
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#F4E9DC', 
                        },
                    },
                }}
                
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon className="searchbar-icon" />
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
}

export default Searchbar;
