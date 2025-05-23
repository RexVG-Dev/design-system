import { useEffect, useState } from 'react';
import './App.css'
import { Button, VARIANT, SIZE } from '@components/Button';
import { Modal } from '@components/Modal';

function App() {
  const [theme, setTheme] = useState('light');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <div>
        <Button
          variant={VARIANT.primary}
          size={SIZE.medium}
          ariaLabel="Open modal"
          onClick={handleOpen}
        >
          Open Modal
        </Button>
        <Button
          variant={VARIANT.secondary}
          size={SIZE.small}
          ariaLabel="Toggle theme"
          onClick={toggleTheme}
        >Change Theme</Button>
        <Modal
          isOpen={isModalOpen}
          onClose={handleClose}
          ariaLabel="Confirmation dialog"
          title="Delete item"
          footer={{
            link: {
              text: 'Cancel',
              ariaLabel: 'Cancel deletion',
              onClick: handleClose,
            },
            secondary: {
              text: 'Dismiss',
              ariaLabel: 'Dismiss modal',
              onClick: () => alert('Dismiss clicked'),
            },
            primary: {
              text: 'Confirm',
              ariaLabel: 'Confirm deletion',
              onClick: () => {
                alert('Deleted!');
                handleClose();
              },
            },
          }}
        >
          <p>Are you sure you want to delete this item? This action is irreversible.</p>
        </Modal>
      </div>
    </>
  )
}

export default App
