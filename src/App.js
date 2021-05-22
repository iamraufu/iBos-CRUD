import './App.css';
import NameManagement from './Components/NameManagement/NameManagement';
import EmailManagement from './Components/EmailManagement/EmailManagement';

function App() {
  return (
    <div className="main-container">
      <div className="container">
      </div>

      <div className="container mt-5 d-flex">
          <div className="col-md-6">
            <NameManagement />
          </div>
          <div className="col-md-6">
            <EmailManagement />
          </div>

      </div>
    </div>
  );
}

export default App;
