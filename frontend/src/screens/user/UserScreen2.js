import React, { Component } from 'react'
import User from '../../components/User/User'
import data from './data'


export default function UserScreen2() {
    const user = data[0];

    return (
        <User mode="new" user={user}/>
    );
}
