import React from "react";




  render() {
    return (
      <a href="" onClick={this.handleClick} className={this.props.className}>
        {this.state.firstName} {this.state.lastName}
      </a>
    );
  }
}

export default VCardFileCreator;
