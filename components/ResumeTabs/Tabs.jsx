'use client';
import React, { useState } from 'react';
import './styles.css'; // You can add CSS styles for tabs in this file

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='tabs-container'>
            <div className='tabs'>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab ${activeTab === index ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}>
                        {tab.title}
                    </div>
                ))}
            </div>
            <div className='tab-content'>{tabs[activeTab].content}</div>
        </div>
    );
};

// Example usage:
const App = () => {
    const tabs = [
        { title: 'Tab 1', content: <p>This is the content of Tab 1.</p> },
        { title: 'Tab 2', content: <p>This is the content of Tab 2.</p> },
        { title: 'Tab 3', content: <p>This is the content of Tab 3.</p> },
    ];

    return (
        <div className='App'>
            <h1>Tabs Example</h1>
            <Tabs tabs={tabs} />
        </div>
    );
};

export default App;
