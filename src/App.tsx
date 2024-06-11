import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './pages/root.page.tsx';
import { LoginPage } from './pages/login.page.tsx';
import { MapPage } from './pages/map.page.tsx';
import { SignupPage } from './pages/signup.page.tsx';
import { WizardPage } from './pages/wizard.page.tsx';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: 'map', element: <MapPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'wizard', element: <WizardPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
