'use client';
import Filter from '@/components/Filter/Filter';
import { useState, useEffect } from 'react';
import style from './page.module.css';
import Cardjob from '../components/Cardjob';
import Link from 'next/link';

export const get = async (arg) => {
  const URL = 'http://localhost:3001/project';
  const query =
    typeof arg === 'number'
      ? '/' + arg
      : typeof arg === 'object'
      ? '?' + new URLSearchParams(arg)
      : '';
  const uri = URL + query;
  const res = await fetch(uri);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const { data } = await res.json();
  return data;
};

export default function Home() {
  const [paginate, setPaginate] = useState();
  const [order, setOrder] = useState('ASC');

  useEffect(() => {
    get({ column: 'title', direction: order }).then((data) =>
      setPaginate(data)
    );
  }, [paginate, order]);

  const handleSort = (e) => {
    setOrder(e);
  };

  return (
    <>
      <Filter onSortChange={handleSort} />
      <main className={`container`}>
        <section className={`${style['jobs-container']}`}>
          {paginate &&
            paginate.map((x) => (
              <Link
                className={`${style['detail-link']}`}
                href={`/job-offer/${x.id}`}
              >
                <Cardjob
                  key={x.id.toString()}
                  title={x.title}
                  address={x.address}
                  description={x.description}
                  budget={x.budget}
                  // hora={x.hora}
                />
              </Link>
            ))}
        </section>
        {/* <BasicPagination prueba={prueba} setPaginate={setPaginate} /> */}
      </main>
    </>
  );
}
