import React from 'react';
import LeftContent from './leftContent/LeftContent';
import CenterContent from './centerContent/CenterContent';
import RightContent from './rightContent/RightContent';

const MainContent = () => {
  return (
    <div id="MainContent">
      <LeftContent />
      <CenterContent />
      <RightContent />
    </div>
  );
}

export default MainContent;
