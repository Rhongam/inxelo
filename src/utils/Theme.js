import { TextField } from '@mui/material';
import { amber, blue, grey } from '@mui/material/colors';
import { createTheme, styled } from '@mui/material/styles';
import { DateTimePicker } from '@mui/x-date-pickers';

export const theme = createTheme({
    palette: {
        primary: {
            main: blue[400],
        },
        secondary: {
            main: amber[600],
        },
        grey: {
            main: grey[600],
        }
    }
});

export const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#ffb300',
    },
    '& label.MuiInputBase-formControl': {
        color: '#ffb300',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#ffb300',
        fontColor: 'white'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#ffb300',
            fontColor: 'white'
        },
        '&:hover fieldset': {
            borderColor: '#ffb300',
            fontColor: 'white'
        },
        '&.Mui-focused fieldset': {
            borderColor: '#ffb300',
            fontColor: 'white'
        },
    },
});

export const CustomDateTimepicker = styled(DateTimePicker)({
    '& label.Mui-focused': {
        color: '#ffb300',
    },
    '& label.MuiInputBase-formControl': {
        color: '#ffb300',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#ffb300',
        fontColor: 'white'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#ffb300',
        },
        '&:hover fieldset': {
          borderColor: '#ffb300',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#ffb300',
        },
      }
})