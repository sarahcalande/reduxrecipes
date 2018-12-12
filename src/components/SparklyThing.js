import React from 'react'
import Sparkle from 'react-sparkle'

class SparklyThing extends React.Component {
  // Note: the parent of Sparkle must be positionted relatively or absolutely
  render () {
    return (
      <div style={{ position: 'relative' }}>
        <Sparkle />
      </div>
    )
  }
}
