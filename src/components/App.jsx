import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  return (
    <>
      <Searchbar />
      <Loader />
      <ImageGallery />
      <Button />
      {/* <Modal /> */}
    </>
  );
};
