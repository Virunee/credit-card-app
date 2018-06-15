import Card from '../components/Card'
import React, { Component } from 'react';
import { cards } from '../cardConfig'

const cardComponents = cards.map(
    ({name, apr, btod, purchaseoffer,credit, img}, key) => 
<Card name={name} apr={apr} btod={btod} purchaseoffer={purchaseoffer} img={img} credit={credit} key={key} />
);

class CardsPanel extends Component {
    render() {
        return (
            cardComponents
        )
    }
}
export default CardsPanel;