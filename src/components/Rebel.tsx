import { useSearchParams } from 'react-router-dom'

const Rebel: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleClick = () => setSearchParams({ shipType: 'x-wing', baseLocation: 'hoth'})
  console.log(searchParams.get('shipType'))
  console.log(searchParams.get('baseLocation'))

  return (
    <div>
      <p>This is REBEL Page</p>
      <button onClick={handleClick}>Set search params</button>
    </div>
  )
}

export default Rebel
