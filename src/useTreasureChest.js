import React, { useState, useEffect } from 'react';

function useTreasureChest(chest, action, quantity, currency) {
  const [treasureChest, setTreasureChest] = useState(chest);

  console.log("tc", treasureChest);
//   useEffect(() => {
//     function handleStatusChange(status) {
//       setIsOnline(status.isOnline);
//     }

//     ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
//     return () => {
//       ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
//     };
//   });

  return treasureChest;
}

export {useTreasureChest};