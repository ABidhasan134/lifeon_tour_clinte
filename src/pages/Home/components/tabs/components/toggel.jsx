import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { CiHeart } from 'react-icons/ci';

const Toggle = () => {
  const [selected, setSelected] = React.useState(false);

  const handleChange = (event, newSelected) => {
    setSelected(newSelected === 'list' ? !selected : false);
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={selected ? 'list' : null}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
        <CiHeart size={24} color={selected ? 'red' : 'black'} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Toggle;
