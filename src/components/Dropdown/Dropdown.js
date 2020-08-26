import React from 'react';
import './Dropdown.scss';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ruFlag from '../../assets/ru-flag.png';
import ukFlag from '../../assets/uk-flag.png';
import jpFlag from '../../assets/jp-flag.png';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    textAlign: "right",
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(6),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [language, setLanguage] = React.useState('');
  const handleChange = (event) => {
    setLanguage(event.target.value);
    props.selectLanguage(event.target.value)
  };

  return (
    <div className='select-language'>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={language}
          onChange={handleChange}
          label="Language"
        >
          <MenuItem  value={'japan'}><img className='language' src={jpFlag} alt="japan"/>Japan</MenuItem>
          <MenuItem  value={'english'}><img className='language' src={ukFlag} alt="english"/>English</MenuItem>
          <MenuItem  value={'russian'}><img className='language' src={ruFlag} alt="russian"/>Russian</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
