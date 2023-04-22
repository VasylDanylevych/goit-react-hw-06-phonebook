import { Input, Label } from "./Filter.style";
import PropTypes from 'prop-types';



export const Filter = ({value, onChange}) => {
    return (
        <Label>
          Find contacts by name
          <Input
            type="text"
            name="filter"
            required
            value={value}
            onChange={onChange}
          />
        </Label>
    )
}


Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};