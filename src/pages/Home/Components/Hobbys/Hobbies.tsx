import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@lokalise/louis';
import { Code } from "@lokalise/louis";

const Hobbies = () => {

    return (
        <Tabs>
            <TabList>
                <Tab>Visual</Tab>
                <Tab>Code</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    My name is Carlos and my Hobbies are:
                    <ul>
                        <li>Motorbikes</li>
                        <li>Technology</li>
                        <li>video-games</li>
                    </ul>
                </TabPanel>
                <TabPanel>
                    <Code multiline>
                        {`
                        My name is Carlos and my Hobbies are:
                        <ul>
                            <li>Motorbikes</li>
                            <li>Technology</li>
                            <li>video-games</li>
                        </ul>
                        `}
                    </Code>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

export default Hobbies;