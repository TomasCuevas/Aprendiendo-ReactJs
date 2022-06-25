import { Box } from '@mui/system'

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {

  return (
    <Box sx={{ display: 'flex' }}>

      {/* Navbar */}

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