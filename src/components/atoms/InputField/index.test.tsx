import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputField } from './index';

describe('InputField Component', () => {
  test('renders the InputField correctly', () => {
    const placeholder = 'Enter your name';
    const value = 'Dewansh Kumar';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    const onChangeFun = (event: React.ChangeEvent<HTMLInputElement>) => {};
    const name = 'userName';
    const type = 'text';

    render(
      <InputField
        placeholder={placeholder}
        value={value}
        onChangeFun={onChangeFun}
        name={name}
        type={type}
      />
    );

    // Check the input field role
    const input1 = screen.getByRole('textbox');
    expect(input1).toBeInTheDocument();

    // Check the input field value
    const input2 = screen.getByDisplayValue('Dewansh Kumar');
    expect(input2).toBeInTheDocument();

    // Check the input field placeholder
    const input3 = screen.getByPlaceholderText('Enter your name');
    expect(input3).toBeInTheDocument();
  });
});
