import logo from './logo.svg';
import './App.css';
import { Timer } from './cmps/timer';

export const RootCmp = () => {
  return (
    <div className="App">
      <Timer time={70} />
    </div>
  );
}

