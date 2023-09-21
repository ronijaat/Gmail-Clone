import { AppBar, Toolbar, styled, InputBase ,Box} from '@mui/material';
import { Menu as MenuIcon, Search, Tune ,HelpOutlineOutlined,SettingsOutlined,AppsOutlined,AccountCircleOutlined} from '@mui/icons-material';
import { gmailLogo } from '../constants/constants';

const StyledAppBar = styled(AppBar)`
    background : #F5F5F5;
    box-shadow : none;
`
const SerachWrapper = styled(Box)`
    background : #EAF1FB;
    margin-left : 80px;
    border-radius : 8px;
    min-width : 690px;
    max-width : 720px;
    height : 48px;
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 0 20px;
    & > div {
        width : 100%;
        padding : 0 10px;
    }
`
const OptionsWrapper = styled(Box)({
    width : "100%",
    display : 'flex',
    justifyContent : 'end',
    '& > svg ':{
        marginLeft : 20
    }
})

const Header = ({toggleDrawer}) => {
    return (
        <StyledAppBar position='static'>
            <Toolbar>
                <MenuIcon color="action" onClick={toggleDrawer}/>
                <img src={gmailLogo} alt="logo" style={{ width: 110, marginLeft: 15, }} />
                <SerachWrapper>
                    <Search color="action"/>
                    <InputBase placeholder='Search mail'/>
                    <Tune color="action"/>
                </SerachWrapper>
                <OptionsWrapper>
                    <HelpOutlineOutlined color="action"/>
                    <SettingsOutlined color="action"/>
                    <AppsOutlined color="action"/>
                    <AccountCircleOutlined color="action"/>
                </OptionsWrapper>
            </Toolbar>

        </StyledAppBar>
    )
}

export default Header;