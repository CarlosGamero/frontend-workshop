import React from 'react';
import {Tabs, TabList, Tab, TabPanels, TabPanel} from '@lokalise/louis';
import {Container, TabContainer} from './styles'
import TooltipComponent from '../../components/TooltipComponent/TooltipComponent'
import Hobbies from '../../components/Hobbys/Hobbies'
import FormComponent from '../../components/FormComponent/FormComponent'

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
                    <TabContainer>
                        <TooltipComponent/>
                    </TabContainer>
                </TabPanel>
                <TabPanel>
                    <TabContainer>
                        <Hobbies/>
                    </TabContainer>
                </TabPanel>
                <TabPanel>
                    <TabContainer>
                        <FormComponent/>
                    </TabContainer>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Container>
  );
};

export default Home;
