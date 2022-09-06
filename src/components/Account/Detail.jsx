import { useQuery } from 'react-query'
import { getAccount } from '../api/accountApi'

const AccountDetail = ({ accountId }) => {
  const {
    data: acc,
    isLoading,
    isError,
    isFetching,
    status
  } = useQuery(['accId', accountId], () => getAccount(accountId), {
    enabled: Boolean(accountId),
    cacheTime: 1000 * 60
  })

  if (!accountId) return 'Please select an account'

  if (isLoading) return 'Loading...'

  if (isError) return 'Something went wrong'

  return (
    <>
      {isFetching && 'Fetching...'}
      <ul>
        <li>{acc.username}</li>
        <li>{acc.email}</li>
        <li>{acc.phone}</li>
      </ul>
    </>
  )
}

export default AccountDetail
