// components/ButtonSwitchTheme.tsx
'use client'

import { useTheme } from '@/lib/theme/ThemeProvider';
import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
`;

const ButtonSwitchTheme = () => {
    const { toggleTheme } = useTheme();

    return (
        <div>
            <Button onClick={() => toggleTheme('light')}>Light Theme</Button>
            <Button onClick={() => toggleTheme('dark')}>Dark Theme</Button>
            <Button onClick={() => toggleTheme('alternative')}>Alternative Theme</Button>
        </div>
    );
};

export default ButtonSwitchTheme;
