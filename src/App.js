/** @format */

import './App.css';
import { useState, useEffect } from 'react';
import { Gallery, Searchbar, Modal, Loader, Button } from './components';
import { api } from './services/api';

function App() {
  const [gallery, setGallery] = useState([]);
  const [isOpenModal, setOpenModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [modalData, setModalData] = useState('');
  const [cacheValue, setCacheValue] = useState('');
  const [page, setPage] = useState(1);

  const handleModal = () => setOpenModal((prev) => !prev);
  const handleLoading = () => setLoading((prev) => !prev);
  const handleModalData = (data) => {
    handleModal();
    setModalData(data);
  };
  console.log('gallery', gallery);

  const handlePage = () => setPage((prev) => prev + 1);
  const handleMore = () => {
    handleLoading();
    api
      .getImages({ value: cacheValue, page })
      .then(({ data: { hits } }) => {
        handlePage();
        setGallery((prev) => [...prev, ...hits]);
      })
      .catch((r) => console.log('err', r))
      .finally(() => setLoading(false));
  };

  const handleSearch = (searchQuery) => {
    handleLoading();
    setCacheValue(searchQuery.search);
    setPage(1);
    api
      .getImages({ value: searchQuery.search, page: 1 })
      .then(({ data: { hits } }) => {
        handlePage();
        setGallery(hits);
      })
      .catch((r) => console.log('err', r))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Searchbar onSubmit={handleSearch} />;
      <Gallery list={gallery} handle={handleModalData} />;
      {isOpenModal && <Modal handleClose={handleModal} dataSrc={modalData} />}
      {gallery.length > 0 && <Button addItems={handleMore} />}
    </>
  );
}

export default App;
