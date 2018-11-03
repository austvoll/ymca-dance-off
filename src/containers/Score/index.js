import React from 'react';

class Score extends React.Component {
    render() {
        const {score} = this.props;

        return <div>{score}</div>
    }
}

export default Score;