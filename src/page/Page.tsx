import React from 'react';

import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import styles from './Page.module.css';

const Page: React.FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <PageHeader />
      <div className={styles.body}>
        Test themes
        <button
          style={{
            height: '20px',
            marginTop: '4px',
            backgroundColor: '#DAD8D9',
            marginLeft: '10px',
          }}
          className={styles.button}
        >
          Button styles
        </button>
      </div>
      <PageFooter />
    </div>
  );
};

export default Page;
