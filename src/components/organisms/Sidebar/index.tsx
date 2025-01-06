import React, { useState, useCallback } from 'react';
import { Stack, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Icons from '../../atoms/Icons';
import Text from '../../atoms/Typography';
import theme from '../../../themes';
import SidebarElement from '../../molecules/SideBarElement';
import HomeIcon from '../../../../public/assests/icons/HomeIcon.svg';
import CashAccelerationIcon from '../../../../public/assests/icons/CashAccleration.svg';
import FlashIcon from '../../../../public/assests/icons/FlashIcon.svg';
import LogoIcon from '../../../../public/assests/icons/SeederLogo.svg';
import { useNavigate } from 'react-router-dom';

const sidebarElementText = [
  {
    id: 0,
    text: 'Home',
    icon: HomeIcon,
    name: 'home icon',
    dest: '/',
  },
  {
    id: 1,
    text: 'Cash Acceleration',
    icon: CashAccelerationIcon,
    name: 'cashAcceleration icon',
    dest: '/cashAcceleration',
  },
];

const Sidebar: React.FC = () => {
  const [activeElement, setActiveElement] = useState('Home');
  const navigate = useNavigate();

  const SidebarContainer = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.background.backgroundElevation1,
    padding: '40px 20px',
    height: 'calc(100vh - 80px)',
    gap: '40px',
    overflow: 'hidden',
    width: '250px',
  }));

  const HeadContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
    height: '10%',
  });

  const BodyContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    height: '80%',
  });

  const FooterContainer = styled(Box)({
    height: '10%',
  });

  const handleElementClick = useCallback(
    (text: string, dest: string) => {
      setActiveElement(text);
      navigate(dest);
    },
    [navigate]
  );

  return (
    <SidebarContainer>
      <HeadContainer>
        <Icons src={LogoIcon} alt='logo icon' width='29.9px' height='28px' />
        <Text
          variant='title'
          textBody='Seeder'
          sx={{
            color: theme.palette.primary.primaryTextHighEmp,
            fontSize: '24px',
          }}
        />
      </HeadContainer>
      <BodyContainer>
        {sidebarElementText.map((item) => (
          <SidebarElement
            key={item.id}
            active={activeElement === item.text}
            title={item.text}
            icon={item.icon}
            name={item.name}
            onClick={() => handleElementClick(item.text, item.dest)}
          />
        ))}
      </BodyContainer>
      <FooterContainer>
        <SidebarElement
          active={activeElement === 'Watch how to'}
          title='Watch how to'
          icon={FlashIcon}
          name='flash icon'
          onClick={() => setActiveElement('Watch how to')}
        />
      </FooterContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
