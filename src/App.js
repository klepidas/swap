import Top from './components/Top'
import Swap from './components/Swap'
import Button from './components/Button'
import Swapping from './components/Swapping';

function App() {
  return (
    <div className="top">
      <Top />
      <Swap />
      <div className='container'>
      <Button />
      <Swapping />
      </div>
    </div>
  );
}

export default App;
