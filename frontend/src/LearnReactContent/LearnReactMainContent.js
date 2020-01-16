import React from 'react';

import ToDoItem from './ToDoItem'
import cardData from './CardData'
import ContactCard from './ContactCard'
function LearnReactMainContent() {
    const cardComponents = cardData.map(card => {
        return (
            <ContactCard key={card.id} title={card.title} body={card.body} button={card.button} />
        )
    })

    return (
        <main className="learn-react-main-content">
            <h2>Main Content - Checkbox</h2>
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            {cardComponents}
            <hr />
        </main>
    );
}

export default LearnReactMainContent
