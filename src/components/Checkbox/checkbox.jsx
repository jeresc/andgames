import { checkedBox, uncheckedBox } from '@/assets';
import { useState } from 'react';
import {
  StyledCheckbox,
  CheckboxImage,
  CheckboxValue,
} from './checkbox.styles';

export const Checkbox = ({ element, toggleElement }) => {
  const truncate = (str, n) => {
    return str.length > n ? str.slice(0, n - 1) + '...' : str;
  };

  const [checked, setChecked] = useState(false);
  return (
    <StyledCheckbox
      onClick={() => {
        setChecked(!checked);
        toggleElement(element.name);
      }}
    >
      {<CheckboxImage src={checked ? checkedBox : uncheckedBox} />}
      <CheckboxValue>{truncate(element.name, 10)}</CheckboxValue>
    </StyledCheckbox>
  );
};
