import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Search extends Component {
    render(){
        console.log(this.props.location.especialidad);
        return <div>{this.props.location.especialidad}</div>
    }
}

//export default Search;
export default withRouter(Search)
