import React from 'react';
import styles from './LoadingBadge.module.css';
import Spinner from './Spinner';

interface LoadingBadgeProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingBadge: React.FC<LoadingBadgeProps> = ({ 
  text = 'Loading...', 
  size = 'md' 
}) => {
  return (
    <div className={`${styles.badge} ${styles[size]}`}>
      <Spinner />
      <span className={styles.text}>{text}</span>
    </div>
  );
};