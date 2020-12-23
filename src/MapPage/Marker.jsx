import React from 'react';
import {Link} from 'react-router-dom';


class Marker extends React.Component {

    render() {
        const {id} = this.props;
        return (
            <a href={`/booking/${id}`}>
                <div id={`marker-${id}`} className="marker" />
            </a>
        )
    }
}

export default Marker;
