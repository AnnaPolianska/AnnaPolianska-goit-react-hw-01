
import css from "./TransactionHistory.module.css"
import TransactionItem from "../TransactionHistoryItem/TransactionHistoryItem";
import clsx from "clsx";


export default function TransactionHistory({ items }) {
    return (
        <table className={css.container}>
            <thead className={css.thead}>
                <tr>
                    <th className={css.th}>Type</th>
                    <th className={css.th}>Amount</th>
                    <th className={css.th}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.tbody}>
                {items.map((item, index) => (
                    <tr
                        key={item.id}
                        className={clsx(index % 2 === 0 ? css.tr : css.transparent)}
                    >
                        <TransactionItem {...item} />
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
