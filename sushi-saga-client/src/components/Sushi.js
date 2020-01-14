// import React, { Fragment } from 'react'
import React from 'react'

class Sushi extends React.Component {

  state = {
    eaten: false
  }

  removeSushi = () => {
    
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" 
            onClick={ () => this.props.eatSushi(this.props.sushi) }>
          { 
            /* Tell me if this sushi has been eaten! */ 
            false ?
              null
            :
              <img src={this.props.sushi.img_url} alt="sushi" width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {/* Give me a name! */} - ${/* Give me a price! */}
        </h4>
      </div>
    )
  }
}

export default Sushi
