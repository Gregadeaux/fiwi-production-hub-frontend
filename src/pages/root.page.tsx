import { Outlet } from 'react-router-dom';
import { HeaderComponent } from '../components/header.component';

export const Root: React.FC = () => {
  return (
    <div id="page-container" className="mx-auto flex min-h-dvh w-full flex-col p-16 bg-gray-100">
      <HeaderComponent />
      <main id="page-content" className="flex max-w-full w-full flex-auto flex-col mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
