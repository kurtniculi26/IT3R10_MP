import { View, Text } from 'react-native';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import NameText from '../Typography/NameText';
import ManageProfile from '../Panels/ManageProfilePanel';
import ProfileText from '../Typography/ProfileText';
import SettingsText from '../Typography/SettingsText';
import Notifications from '../Panels/NotificationPanel';
import SignOutButton from '../Buttons/SignOutButton';
import DarkMode from '../Panels/DarkModePanel';

const PageOne = () => {
  return (
    <View style={{padding: 15,backgroundColor: '#FFF'}}>
      <Avatar/>
      <NameText/>
      <ProfileText/>
      <ManageProfile/>
      <SettingsText/>
      <Notifications/>
      <DarkMode/>
      <SignOutButton/>
    </View>
  )
}

export default PageOne