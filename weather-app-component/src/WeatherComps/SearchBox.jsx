import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import "./SearchBox.css"

const SearchBox = ({handleSubmit, handleChange,city}) => {

  return (
    <div className='search-container'>
        <form action="" onSubmit={handleSubmit}>
              <TextField id="city" label="Search City" variant="outlined"  required value={city} onChange={handleChange}/> &nbsp;
              <Button variant="contained" startIcon={<ManageSearchIcon />} size="large" type="submit">Search</Button>
        </form>
    </div>
  )
}

export default SearchBox