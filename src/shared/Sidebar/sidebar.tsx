import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/SettingsSharp';
import SidebarImage from '../../assets/sidebar.png';
import './sidebarStyles.css';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          backgroundImage: `url(${SidebarImage})`,
          backgroundSize: 'cover',
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between', 
        },
      }}
      className="drawer"
    >
      <Grid container direction="column" className="box" sx={{ height: '100%' }}>
        <Grid item>
          <Box className="my-app">
            SCROLLR
          </Box>
        </Grid>

        <Grid item sx={{ flexGrow: 1, display: 'flex', alignItems: 'flex-end' }}>
          <List className="list">
            <ListItem button className="list-item">
              <ListItemIcon className="list-item-icon">
                <HomeIcon sx={{ color: '#e9e1d8', fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText
                primary="HOME"
                className="list-item-text"
              />
            </ListItem>

            <ListItem button className="list-item">
              <ListItemIcon className="list-item-icon">
                <DashboardIcon sx={{ color: '#e9e1d8' }} />
              </ListItemIcon>
              <ListItemText
                primary="DASHBOARD"
                className="list-item-text"
              />
            </ListItem>

            <ListItem button className="list-item" >
              <ListItemIcon className="list-item-icon">
                <SettingsIcon sx={{ color: '#e9e1d8' }} />
              </ListItemIcon>
              <ListItemText
                primary="SETTINGS"
                className="list-item-text"
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default Sidebar;
