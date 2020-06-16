import React from 'react';
import Header from '../app/components/header';
import arrow from '@assets/ic_back.png'
import notifications from '@assets/ic_notifications.png';

export const booksOptions = ({route}) => ({
  header: () => <Header title={route.name} icon={arrow} goBack={true}/>
})

export const libraryOptions = ({route}) => ({
  header: () => <Header title={route.name} icon={notifications}/>
})