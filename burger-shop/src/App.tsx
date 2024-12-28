import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppHeader from './features/components/AppHeader/AppHeader';
import DesignerPage from './pages/DesignerPage';
import ProfilePage from './pages/ProfilePage';
import OrderListPage from './pages/OrderListPage';
import RegistrationPage from './pages/RegistrationPage';
import LogInPage from './pages/LogInPage';
import InfoModal from './features/Ingredients/components/modal/InfoModal';
import ResetPasswordForm from './pages/ResetPasswordForm';
import PrivateOverlay from './features/private/components/PrivateOverlay';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path='/designer' element={<DesignerPage />} />
        <Route path='/orderlist' element={<OrderListPage />} />
        <Route path='/profile' element={
          <PrivateOverlay>
            <ProfilePage />
          </PrivateOverlay>
        } />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/reset_password' element={<ResetPasswordForm />} />
      </Routes>
      <InfoModal />
    </div>
  );
}

export default App;
