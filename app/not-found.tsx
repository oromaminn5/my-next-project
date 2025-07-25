import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>ページが見つかりません</dt>
        <dd className={styles.text}>
          あなたがアクセスしようとしてページは存在しません。
          <br />
          URLを再度ご確認下さい。
        </dd>
      </dl>
    </div>
  );
}
