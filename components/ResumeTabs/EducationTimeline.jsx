'use client';
import { Timeline } from 'rsuite';
import styles from './timelineStyle.module.scss';

const EducationTimeline = ({ timelineData }) => {
    return (
        <>
            <Timeline>
                {timelineData.map((item, index) => {
                    return (
                        <Timeline.Item key={index}>
                            {item.title && (
                                <div className={styles.itemContainer}>
                                    <div className={styles.top}>
                                        <div>
                                            <h2>{item.title}</h2>
                                            <h3>
                                                {item.university} ({item.year})
                                            </h3>
                                        </div>
                                        <span>
                                            {item.cpga}/{item.total}
                                        </span>
                                    </div>

                                    <div className={styles.bottom}>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            )}
                        </Timeline.Item>
                    );
                })}
            </Timeline>
        </>
    );
};

export default EducationTimeline;
