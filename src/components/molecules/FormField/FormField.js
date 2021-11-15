import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    margin: 12px 0;
  }
`;

export const FormField = ({
  label,
  value,
  onChange,
  name,
  id,
  type = 'text',
  ...props
}) => (
  <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} name={name} type={type} value={value} onChange={onChange} data-testid={label}/>
  </Wrapper>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
