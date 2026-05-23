import { RouterProvider } from 'react-router';
import { router } from './routes';
import DisclaimerModal from './components/DisclaimerModal';

export default function App() {
  return (
    <>
      <DisclaimerModal />
      <RouterProvider router={router} />
    </>
  );
}