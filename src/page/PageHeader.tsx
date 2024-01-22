import React from 'react';

import styles from './Page.module.css';

const PageHeader: React.FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div>Dad WOD [logo]</div>
      <div>Command Bar for settings and user</div>
    </div>
  );
};

export default PageHeader;
