import React from 'react';
import { Stack } from '@mui/material';
import Text from '../../atoms/Typography/index';
import { styled } from '@mui/material/styles';
import { InputField } from '../../atoms/InputField/index';
import theme from '../../../themes';

interface InputFieldAndTextProps {
  textBody: string;
  label?: string;
  placeholder: string;
  fontColor?: string;
  onChangeFun: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type: HTMLInputElement['type']; // Changed from `any` to `HTMLInputElement['type']`
}

const InputFieldAndText = ({
  label,
  textBody,
  ...props
}: InputFieldAndTextProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { fontColor = 'black' } = props;

  const InputFieldAndTextContainer = styled(Stack)({
    gap: '10px',
    width: '100%',
  });

  return (
    <InputFieldAndTextContainer>
      <Text
        variant='body1'
        textBody={textBody}
        sx={{
          color: theme.palette.primary.primaryTextLowEmp,
        }}
      />

      <InputField
        placeholder={props.placeholder}
        label={label}
        onChangeFun={props.onChangeFun}
        value={props.value}
        name={props.name}
        type={props.type}
        fontColor={props.fontColor}
        variant='outlined'
      />
    </InputFieldAndTextContainer>
  );
};

InputFieldAndText.defaultProps = {};

export default InputFieldAndText;