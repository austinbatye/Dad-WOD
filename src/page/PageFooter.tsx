import React from 'react';

import styles from './Page.module.css';

const PageFooter: React.FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <div>Contact Us | Copyright | Misc info</div>
    </div>
  );
};

export default PageFooter;
