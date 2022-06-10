import React, { Component  } from "react";


class MouseEvent extends Component {

    constructor() {
        super()
        this.state = { mouseX: 0, mouseY: 0 }
      }
    
      handlerEventClick = (e) => {
        console.log(e)
        alert('Hi there!')
      }
    
      handlerMouseMove = (e) => {
        const { clientX, clientY } = e
        this.setState({ mouseX: clientX, mouseY: clientY })
      }
    
      render() {
        return (
          <div>
            <h1>Eventos</h1>
            <button onClick={this.handlerEventClick}>Hi there</button>
    
            <div onMouseMove={this.handlerMouseMove}
              style={{ border: '1px solid #000', marginTop: 10, padding: 10 }}>
              <p>{this.state.mouseX}, {this.state.mouseY}</p>
            </div>
          </div>
        )
      }
}

export default MouseEvent;
