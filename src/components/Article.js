import React from 'react';

function Article({ title, preview, date = "January 1, 1970", minutes }) {

    function displayBentoBox() {
        const numBentoBoxesFloat = minutes / 10;
        const numBentoBoxes = Math.ceil(numBentoBoxesFloat);
        console.log(numBentoBoxes);
        return "🍱".repeat(numBentoBoxes);
    }

    function displayCoffeeCups() {
        const numCoffeeCupsFloat = minutes / 5;
        const numCoffeeCups = Math.ceil(numCoffeeCupsFloat);
        return "☕️".repeat(numCoffeeCups);
    }

    function displayMinutes() {
        let emojis = minutes >= 30 ? displayBentoBox() : displayCoffeeCups();
        return `${emojis} ${minutes}`;
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} * {displayMinutes()}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;