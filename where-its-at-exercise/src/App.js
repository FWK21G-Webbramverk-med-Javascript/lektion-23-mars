import './App.css';
import { Routes, Route } from 'react-router-dom';

import EventList from './views/EventList';
import BuyTicket from './views/BuyTicket';
import Ticket from './views/Ticket';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/events" element={ <EventList />}></Route>
        <Route path="/buy" element={ <BuyTicket /> }></Route>
        <Route path="/ticket" element={ <Ticket /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
