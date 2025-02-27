import React, {useState, useEffect} from 'react'

const CatStats = ({ getStats, localCount }) => {
  const [stats, setStats] = useState([0,0,0])

  useEffect(() => {
    async function fetchStats() {
      const data = await getStats()
      setStats(data)
    }
    if (localCount == 0 || localCount % 3 == 0) {
        console.log('fetching stats')
        fetchStats()
    }
  }, [localCount])

  console.log(stats)
  return (
    <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 flex'>
      <div
        className='bg-blue-600 h-2.5 rounded-full'
        style={{ width: `${stats[0]}%` }}
      ></div>
      <div
        className='bg-pink-600 h-2.5 rounded-full'
        style={{ width: `${stats[1]}%` }}
      ></div>
      <div
        className='bg-purple-600 h-2.5 rounded-full'
        style={{ width: `${stats[2]}%` }}
      ></div>
    </div>
  )
}

export default CatStats
