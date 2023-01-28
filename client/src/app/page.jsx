'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Filter from '@/components/Filter/Filter';
import Pagination from '@/components/Pagination/Pagination';
import JobOfferCard from '@/components/JobOfferCard/JobOfferCard';
import style from './page.module.css';

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
  const [paginate, setPaginate] = useState([]);
  const [order, setOrder] = useState('ASC');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    get({ page: currentPage, column: 'title', direction: order }).then((data) =>
      setPaginate(data)
    );
  }, [paginate, order]);

  const handleSort = (e) => {
    setOrder(e);
  };

  return (
    <main className={`${style['container']}`}>
      <section className={`container ${style['jobs-container']}`}>
        <Filter onSortChange={handleSort} />
        {paginate && paginate.length > 0 ? (
          paginate.map((jobOffer) => (
            <Link
              key={jobOffer.id.toString()}
              className={`${style['detail-link']}`}
              href={`/job-offer/${jobOffer.id}`}
            >
              <JobOfferCard
                title={jobOffer.category}
                address={jobOffer.address}
                description={jobOffer.description}
              />
            </Link>
          ))
        ) : (
          <h1>No hay trabajos disponibles en este momento</h1>
        )}
      </section>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </main>
  );
}
