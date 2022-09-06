import { Typography } from '@mui/material'
import { useQuery } from 'react-query'
import accountApi from '../api/accountApi'

const Account = ({ setAccount }) => {
  const { data, isLoading, isError, error, isSuccess, isFetching, refetch, remove } = useQuery(
    'account',
    accountApi.getAccounts,
    {
      retryDelay: 3000
    }
  )

  return (
    <div style={{ padding: '25px', display: 'flex', gap: '24px', flexDirection: 'column' }}>
      <div>
        <button onClick={() => refetch()}>Refetch</button>
        <button onClick={() => remove()}>Remove</button>
      </div>
      <div>
        {isSuccess && <div>Success</div>}
        {isLoading && <div>Loading...</div>}
        {isError && <div>Something went wrong</div>}
        {error && <div>{error.message}</div>}
        {isFetching && <div>Fetching...</div>}
      </div>
      <ul>
        {data?.map((account) => (
          <li key={account.id}>
            <p style={{ cursor: 'pointer' }} onClick={() => setAccount(account.id)}>
              {account.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Account
