import styles from '../TransactionHistory/TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>

      {items.map(({ id, amount, type, currency }) => (
        <tbody className={styles.tbody} key={id}>
          <tr className={styles.tr}>
            <td className={styles.td}>{type}</td>
            <td className={styles.td}>{amount}</td>
            <td className={styles.td}>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default TransactionHistory;
