import {Link, useLocation} from 'react-router-dom'

const  TabNav=() =>{

  const location = useLocation()

  return (
    <div className='tab-nav'>
      <Link to="/coins/btc" className={location.pathname==='/coins/btc'?'tab_active':''}>Bitcoin BTC</Link>
      <Link to="/coins/eth" className={location.pathname==='/coins/eth'?'tab_active':''}>Ethereum ETH</Link>
      <Link to="/coins/ada " className={location.pathname==='/coins/ada'?'tab_active':''}>Cardano ADA</Link>
  </div>
  );
}

export default TabNav;
