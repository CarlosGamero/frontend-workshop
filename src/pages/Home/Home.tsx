import React from 'react';
import {Tabs, TabList, Tab, TabPanels, TabPanel} from '@lokalise/louis';
import {Container} from './styles'
import TooltipComponent from './Components/TooltipComponent/TooltipComponent'
import Hobbies from './Components/Hobbys/Hobbies'

const Home = () => {
  return (
      <Container>
        <Tabs>
            <TabList>
                <Tab>Task 1</Tab>
                <Tab>Task 2</Tab>
                <Tab>Task 3</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <TooltipComponent/>
                </TabPanel>
                <TabPanel>
                    <Hobbies/>
                </TabPanel>
                <TabPanel>
                    TODO
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Container>
  );
};

export default Home;
