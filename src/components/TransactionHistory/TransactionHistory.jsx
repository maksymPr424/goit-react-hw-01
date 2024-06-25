// import clsx from "clsx";
import css from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

const capitalizeFirstLetter = (string) => {
  if (string.length === 0) return string;

  return string.charAt(0).toUpperCase() + string.slice(1);
};

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.tableTitle}>
        <tr className={css.tableInfo}>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.data}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.line} key={id}>
              <td className={css.inform}>{capitalizeFirstLetter(type)}</td>
              <td className={css.inform}>{capitalizeFirstLetter(amount)}</td>
              <td className={css.inform}>{capitalizeFirstLetter(currency)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
