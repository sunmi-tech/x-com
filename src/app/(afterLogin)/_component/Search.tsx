"use client";

import styles from './search.module.css'
import { usePathname } from 'next/navigation';
import SearchForm from './SearchForm';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function Search() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const onChangeFollow = () => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('pf', 'on');
      router.replace(`/search?${newSearchParams.toString()}`);
    }
    const onChangeAll = () => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete('pf');
      router.replace(`/search?${newSearchParams.toString()}`);
    }

    if (pathname === "/explore") {
        return null;
    }

    if (pathname === "/search") {
        return (
            <div>
            <h5 className={styles.filterTitle}>검색 필터</h5>
            <div className={styles.filterSection}>
              <div>
                <label>사용자</label>
                <div className={styles.radio}>
                  <div>모든 사용자</div>
                  <input type="radio" name="pf" defaultChecked onChange={onChangeAll} />
                </div>
                <div className={styles.radio}>
                  <div>내가 팔로우하는 사람들</div>
                  <input type="radio" name="pf" value="on" onChange={onChangeFollow} />
                </div>
              </div>
            </div>
          </div>
        );
      }
    
  return (
    <SearchForm />
  );
}
