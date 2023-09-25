import styles from './styles.module.css'

const Bar = ({ value, maxValue }) => {
  return (
    <div className>
      <div className={styles.max}>
        <div
          className={styles.value}
          style={{ width: `${(value / maxValue) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Bar;
