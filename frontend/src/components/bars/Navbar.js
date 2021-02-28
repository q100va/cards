import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

/*
Props are:
    * Callback which is called when sidebar button was clicked
    onSidebarClick = function(event)

*/
export default function Navbar(props) {
    const classes = useStyles();

    /*
    let menuState = {
        menus: {
            profile: anchorEl,
            mobile: anchorEl,
            ...
        }
    }
    */
    const [menuState, setMenuState] = React.useState(null);

    function isMenuOpen(menuName) {
        if (!menuState)
            return false;
        return (menuName in menuState.menus)
    }
    
    function getAnchorElement(menuName) {
        if (!menuState)
            return null;
        return menuState.menus[menuName];
    }
    
    function closeMenu(menuName) {
        if (!menuState)
            return {};
        delete menuState.menus[menuName]
        return {...menuState}
    }

    const handleMenuOpen = (menuName) => {
        return event => {
            setMenuState({ menus: { [menuName]: event.currentTarget } });
        }
    }

    const handleMenuClose = (menuName) => {
        return event => {
            setMenuState(closeMenu(menuName));
        }
    }


    const menuId = 'primary-account-menu';
    const renderProfile = (
        <Menu
            anchorEl={getAnchorElement("profile")}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen("profile")}
            onClose={handleMenuClose("profile")}
        >
            <MenuItem onClick={handleMenuClose()}>Мои заявки</MenuItem>
            <MenuItem onClick={handleMenuClose()}>Мои поздравляющие</MenuItem>
            <MenuItem onClick={handleMenuClose()}>Рассылка</MenuItem>
            <MenuItem onClick={handleMenuClose()}>Настройки</MenuItem>
            <MenuItem onClick={handleMenuClose()}>Выход</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={getAnchorElement("mobile")}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen("mobile")}
            onClose={handleMenuClose("mobile")}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleMenuOpen("profile")}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Open sidebar"
                        onClick={props.onSidebarClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Заголовок
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>

                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleMenuOpen("profile")}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMenuOpen("mobile")}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderProfile}
        </div>
    );
}
