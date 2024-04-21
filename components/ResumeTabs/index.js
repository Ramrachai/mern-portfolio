'use client';
import styles from './styles.module.scss';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './mystyle.css';

const ResumeTabs = () => {
    return (
        <div className={styles.container}>
            <h2>7+ YEARS OF EXPERIENCE</h2>
            <h1>My Resume</h1>

            <Tabs focusTabOnClick={false}>
                <TabList className={styles.tabList}>
                    <Tab>Education</Tab>
                    <Tab>Skills</Tab>
                    <Tab>Experience</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ResumeTabs;
