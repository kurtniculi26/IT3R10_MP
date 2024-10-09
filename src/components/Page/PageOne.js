// PageOne.js
import { View } from 'react-native';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import NameText from '../Typography/NameText';
import ManageProfile from '../Panels/ManageProfilePanel';
import ProfileText from '../Typography/ProfileText';
import SettingsText from '../Typography/SettingsText';
import Notifications from '../Panels/NotificationPanel';
import SignOutButton from '../Buttons/SignOutButton';
import DarkMode from '../Panels/DarkModePanel';

const PageOne = ({ toggle, onToggle }) => {

  return (
    <View style={{ padding: 15, backgroundColor: toggle ? '#000' : '#FFF' }}>
      <Avatar />
      <NameText  toggle={toggle} onToggle={onToggle}/>
      <ProfileText toggle={toggle} onToggle={onToggle}/>
      <ManageProfile />
      <SettingsText  toggle={toggle} onToggle={onToggle} />
      <Notifications />
      <DarkMode toggle={toggle} onToggle={onToggle} />
      <SignOutButton />
    </View>
  );
};

export default PageOne;
