import logo from './logo.svg'
import './App.css'
import { Timer } from './cmps/timer'
import { Games } from './cmps/games'

export const RootCmp = () => {
  return (
    <div className="App">
      <Timer time={70} />
      <Games />
      
    </div>
  );
}

