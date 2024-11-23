import React from 'react';
import firstMusic from './audio/englishMusic.m4a';
import secondMusic from './audio/henok abebe.m4a';
import thirdMusic from './audio/oromicMusic.m4a';
import fourthMusic from './audio/samiBerhane.m4a';
const  MusicAsset = () => {
    const musicAsset=[firstMusic,secondMusic,thirdMusic,fourthMusic];
    return {musicAsset}
};

export default  MusicAsset;