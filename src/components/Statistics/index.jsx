import styles from '../Statistics/Statistics.module.css';

const Statistics = ({ items }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>

    <ul className={styles.statList}>
      {items.map(item => (
        <li
          className={styles.item}
          key={item.id}
          style={{
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
              16
            )}`,
          }}
        >
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percentage}>{item.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;
