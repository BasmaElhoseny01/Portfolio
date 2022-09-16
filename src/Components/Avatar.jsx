import React from 'react';
import AvatarGroup from 'react-avatar-group'

function Avatar({Arr,Max}) {
  return (
    <AvatarGroup
    // avatars={["B", "a", "s","m","a" /* or IAvatar objects */]}
    avatars={Arr}
    initialCharacters={1}
    max={Max}
    size={40}
    displayAllOnHover
    shadow={2}
  />
  )
}

export default Avatar