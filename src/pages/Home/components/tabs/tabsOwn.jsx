import React, { useEffect, useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { GrOverview } from "react-icons/gr";
import './tabsOwn.css'
import axios from 'axios';
import OverViwe from './components/overViwe';
import useVideos from '../../../../hooks/useVideos';
import OurPackages from './components/ourPackages';
import OurGurids from './components/ourGurids';


const TabsOwn = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [videos]=useVideos();
    // console.log(videos)
  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='mt-5'>
    <TabList>
      <Tab><div className='flex items-center gap-2'><GrOverview></GrOverview>Over view</div></Tab>
      <Tab>Our Packges</Tab>
      <Tab>Meet our Tour Guides</Tab>
    </TabList>
    <TabPanel>{videos.map((item)=>{return <OverViwe  item={item} key={item._id}></OverViwe>})}</TabPanel>
    <TabPanel><OurPackages></OurPackages></TabPanel>
    <TabPanel><OurGurids></OurGurids></TabPanel>
  </Tabs>
  )
}

export default TabsOwn
