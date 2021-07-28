/** @format */

import React, { useState } from 'react';
import styles from './styles.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSearch = ({ currentTarget: { value } }) => setSearch(value);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ search });
    setSearch('');
  };

  return (
    <header className={styles.Searchbar}>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <button type="submit" className={styles.button}>
          <span className={styles.label}>Search</span>
        </button>

        <input
          className={styles.input}
          type="text"
          value={search}
          onChange={handleSearch}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
