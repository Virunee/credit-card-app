import Card from '../components/Card'
import React, { Component } from 'react';
import { cardConfig } from '../cardConfig'

// export const cardComponents = cardConfig.map(
//     ({path, component}, key) => 
// <Route exact path={path} component={component} key={key} />
// );

class CardsPanel extends Component {
    render() {
        return (
            <Card name='Card name' apr='12' btod='53' purchaseoffer='5' credit='1200'/>
        )
    }
}
export default CardsPanel;