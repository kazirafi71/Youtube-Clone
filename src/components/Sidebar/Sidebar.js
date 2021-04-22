import React from 'react';
import SidebarRow from './sidebarRow/SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const Sidebar = () => {
    return (
        <div>
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={ExploreIcon} title="Explore"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription" /> <hr/>
            <SidebarRow Icon={LibraryAddIcon} title="Library"/>
            <SidebarRow Icon={HistoryIcon} title="History"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Your Videos"/>
            <SidebarRow Icon={WatchLaterIcon} title="Watch later"/>
            <SidebarRow Icon={ThumbUpAltIcon} title="Likes videos"/>
            
        </div>
    );
};

export default Sidebar;