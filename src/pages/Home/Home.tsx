import React from 'react';
import {Tabs, TabList, Tab, TabPanels, TabPanel} from '@lokalise/louis';
import {Container, TabContainer} from './styles'
import TooltipComponent from '../../components/TooltipComponent/TooltipComponent'
import Hobbies from '../../components/Hobbys/Hobbies'
import FormComponentOOP from '../../components/FormComponent/OOP/FormComponent'
import FormComponentFunctional from '../../components/FormComponent/Functional/FormComponent'
import TaskPageOOP from "../TaskPage/OOP/TaskPage";
import TaskPageFunctional from "../TaskPage/Functional/TaskPage";

const Home = () => {
  return (
      <Container>
        <Tabs>
            <TabList>
                <Tab>Task 1</Tab>
                <Tab>Task 2</Tab>
                <Tab>Task 3 - OOP</Tab>
                <Tab>Task 3 - Functional</Tab>
                <Tab>Tasks page - OOP</Tab>
                <Tab>Tasks page - Functional</Tab>
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
                        <FormComponentOOP/>
                    </TabContainer>
                </TabPanel>
                <TabPanel>
                    <TabContainer>
                        <FormComponentFunctional/>
                    </TabContainer>
                </TabPanel>
                <TabPanel>
                    <TabContainer>
                        <TaskPageOOP/>
                    </TabContainer>
                </TabPanel>
                <TabPanel>
                    <TabContainer>
                        <TaskPageFunctional/>
                    </TabContainer>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Container>
  );
};

export default Home;
