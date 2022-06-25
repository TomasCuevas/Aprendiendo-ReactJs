import { Box } from '@mui/system'
import { Navbar } from '../components/Navbar';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {

  return (
    <Box sx={{ display: 'flex' }}>

      <Navbar drawerWidth={ drawerWidth } />

      {/* Sidebar */}

      <Box 
        component='main'
        sx={{ p: 3, flexGrow: 1 }}
      >
        { children }
      </Box>

    </Box>
  )
}