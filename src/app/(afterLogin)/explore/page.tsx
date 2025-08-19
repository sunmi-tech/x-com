import SearchForm from "../_component/SearchForm";
import TrendSection from "./_component/TrendSection"
import styles from './explore.module.css'

export default function Explore() {
  return (
    <main className={styles.main}>
      <div className={styles.formZone}>
        <SearchForm />
      </div>
      <div className={styles.trend}>
            <h3>나를 위한 트랜드</h3>
            <TrendSection />
      </div>
    </main>
  );
}
