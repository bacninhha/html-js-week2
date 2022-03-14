const quotationsList = [
    ['You only live once, but if you do it right, once is enough.', "Mae West"],
    ['Don\'t cry because it\'s over, smile because it happened.', "Dr. Seuss"],
    ['Good friends, good books, and a sleepy conscience: this is the ideal life.', "Mark Twain"],
    ['But better to get hurt by the truth than comforted with a lie.', "Khaled Hosseini"],
    ['Life is like riding a bicycle. To keep your balance, you must keep moving.', "Albert Einstein"],
    ['Life isn\'t about finding yourself. Life is about creating yourself.', "George Bernard Shaw"],
    ['Keep your eyes on the stars and your feet on the ground.', "Theodore Roosevelt"],
    ['If you want to go fast, go alone. If you want to go far, go together.', "African proverb"]
]

const colorList = [
    "green", "blue", "yellow", "aquamarine", "white", "grey"
]

function randomQuotation(){
   let randomIndex = Math.floor(Math.random()*quotationsList.length);
   const quotationsText = document.getElementById('quote');
   const quotationsAuthor = document.getElementById('quote-author');
   quotationsText.innerText = quotationsList[randomIndex][0];
   quotationsAuthor.innerText = quotationsList[randomIndex][1];

}

function radomColor(){
    let randomIndex = Math.floor(Math.random()*colorList.length);    
    const paragrap = document.getElementsByClassName("quote-box")[0];
    paragrap.style.backgroundColor = colorList[randomIndex];
    const bodyparagrap = document.getElementsByTagName('body')[0];
    bodyparagrap.style.backgroundColor = colorList[colorList.length-randomIndex];
    const button = document.getElementById('new-quote');
    button.style.backgroundColor = colorList[randomIndex-1];
    button.style.color=colorList[randomIndex]
}

const updateQuoteButton = document.getElementById('new-quote');
updateQuoteButton.addEventListener('click', () => {
    radomColor();
    randomQuotation();
})
randomQuotation();

setInterval(() => {
    radomColor();
    randomQuotation();
}, 3000);