import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import PeopleIcon from '@mui/icons-material/People';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import BedIcon from '@mui/icons-material/Bed';
import QueueIcon from '@mui/icons-material/Queue';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HealingIcon from '@mui/icons-material/Healing';
import SettingsIcon from '@mui/icons-material/Settings';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

const drawerWidth = 80;
const backgroundColor = 'rgb(24, 90, 157)';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'OPD', icon: <LocalHospitalIcon />, path: '/opd' },
  { text: 'Pharmacy', icon: <LocalPharmacyIcon />, path: '/pharmacy' },
  { text: 'Patient', icon: <PeopleIcon />, path: '/patient' },
  { text: 'Followup', icon: <EventRepeatIcon />, path: '/followup' },
  { text: 'IPD', icon: <BedIcon />, path: '/ipd' },
  { text: 'Patient Queue', icon: <QueueIcon />, path: '/patient-queue' },
  { text: 'Token Display', icon: <ViewModuleIcon />, path: '/token-display' },
  { text: 'Reports', icon: <AssessmentIcon />, path: '/reports' },
  { text: 'Referrals', icon: <AssignmentIcon />, path: '/referrals' },
  { text: 'Message', icon: <MessageIcon />, path: '/message' },
  { text: 'Doctor', icon: <PersonIcon />, path: '/doctor' },
  { text: 'Clinic', icon: <BusinessIcon />, path: '/clinic' },
  { text: 'Prescription Template', icon: <ReceiptIcon />, path: '/prescription-template' },
  { text: 'Drug', icon: <HealingIcon />, path: '/drug' },
  { text: 'Message Settings', icon: <SettingsIcon />, path: '/message-settings' },
  { text: 'Templates', icon: <TextSnippetIcon />, path: '/templates' },
];

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor },
      }}
    >
      <Toolbar />
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            component={Link}
            to={item.path}
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '10px 0',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgb(62, 192, 162)',
              },
            }}
          >
            <ListItemIcon sx={{ justifyContent: 'center', minWidth: 'auto', color: 'white' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{ sx: { fontSize: '10px' } }} // Adjust text size here
              sx={{
                textAlign: 'center',
                color: 'white',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
