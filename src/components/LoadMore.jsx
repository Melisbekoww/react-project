import React from 'react'

const LoadMore = ({handleLoadMore}) => {
  return (
    <button onClick={handleLoadMore} className='Button'>
      LoadMore
    </button>
  )
}

export default LoadMore