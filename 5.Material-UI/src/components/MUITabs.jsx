import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabPanel from './CustomTabPanel';
import MUIAvatar from './MUIAvatar';
import MUIAppbar from './MUIAppbar';
import MUICard from './MUICard';
import MUIImageList from './MUIImageList';
import MUIAutocomplete from './MUIAutocomplete';

function MUITabs() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {/* tablara basıldıkça index değerleri newValue'ye düşer aşağıdaki tabların indexleri sırayla gider 0,1,2*/}
                    <Tab label="Kişisel Bilgiler" />
                    <Tab label="Eğitim Bilgisi" />
                    <Tab label="İletişim" />
                </Tabs>
            </Box>



            <CustomTabPanel value={value} index={0}>
                <MUIAvatar />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <MUIAutocomplete />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <MUICard />
            </CustomTabPanel>
        </Box>
    )
}

export default MUITabs