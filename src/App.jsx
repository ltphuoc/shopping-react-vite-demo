import { useState } from 'react';
import Account from './components/Account';
import AccountDetail from './components/Account/Detail';

function App() {
  const [account, setAccount] = useState();
  return (
    <>
      <Account setAccount={setAccount} />
      <AccountDetail accountId={account} />
    </>
  );
}

export default App;
