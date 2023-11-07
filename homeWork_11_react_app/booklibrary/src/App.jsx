// შექმენი რეაქტის პროექტი create-react-app
// პაკეტის გამოყენებით
// ● შექმენი კომპონენტი, რომელიც გამოაჩენს
// წიგნის სურათს, წიგნის სათაურს, მოკლე
// აღწერას, პერსონაჟების სახელებს
// (შეიძლება იყოს ბევრი)
// ● ინფორმაცია უნდა გადაეწოდოს გარედან
// პარამეტრების სახით, სურათის
// შემთხვევაში - ლინკი. ვიზუალი, როგორიც
// გსურს
// ● ამავე კომპონენტში გამოაჩინე ღილაკი.
// ღილაკზე დაჭერით უნდა გამოიძახებოდეს
// ფუნქცია, რომელიც გადაეწოდება
// კომპონენტს პარამეტრად
// ● ფუნქცია უნდა ბეჭდავდეს შესაფერისი
// წიგნის სათაურს და პერსონაჟებს,
// ბეჭდვისთვის გამოიყენე console.log()

import './App.css';
import Idiot from './assets/idiota-b-iext137253294.jpg';
import Anna from './assets/annakarenina.jpg';
import Crime from './assets/crime-and-punishment-by-fyodor-dostoevsky-1.jpg';
import DonQuixote from './assets/doxkixot.jpg'


const books = [
  {
    bookName: "Idiot",
    author: "Fyodor Dostoevsky",
    characters: ["Prince Mishkin,Ganya Ivolgin,Nastasta Filipovna"],
    shortIntro: "The first book in the iconic Harry Potter series, following the adventures of a young wizard, Harry Potter, and his friends at Hogwarts School of Witchcraft and Wizardry.",
    coverPhoto: Idiot
  },
  {
    bookName: "Anna Karenina",
    author: "Leo Tolstoy",
    characters: ["Anna Karenina,Oblonsky,Varechka,Vronsky"],
    shortIntro: "Anna Karenina is a novel by the Russian author Leo Tolstoy, first published in book form in 1878. Considered to be one of the greatest works of literature ever written, Tolstoy himself called it his first true novel",
    coverPhoto: Anna
  },
  {
    bookName: "Crime And Punishment",
    author: "Fyodor Dostoevsky",
    characters: ["Robin Raskolnikov,Dounia,Sonia Marmeladova"],
    shortIntro: "Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866. It was later published in a single volume",
    coverPhoto: Crime
  },
  {
    bookName: "Don Quixote",
    author: "Miguel de Servantes",
    characters: ["Don Quixote,Sancho Pansa,Clavileno,Rocinante"],
    shortIntro: "Don Quixote is a Spanish epic novel by Miguel de Cervantes. It was originally published in two parts, in 1605 and 1615. Considered a founding work of Western literature, it is often labelled as the first modern novel and one of the greatest works ever written",
    coverPhoto: DonQuixote
  }
];


function App() {
  const logger = function(title,characters) {
    console.log(`Title: ${title} Characters: ${characters}`)
  }
  return (
   books.map((book) => <ShowBook key = {book.author} logger = {logger} bookName = {book.bookName} author = {book.author} characters = {book.characters} shortIntro = {book.shortIntro} coverPhoto = {book.coverPhoto} />)
  )
}

function ShowBook({bookName,author,characters,shortIntro,coverPhoto,logger}) {
return(
  <div className='books'>
    <div className='bookCard'>
        <img src = {coverPhoto} className='bookImage'/>
        <p><b>Book name:</b> {bookName}</p>
        <p><b>Author:</b> {author}</p>
        <p><b>Main Characters:</b> {characters.join(', ')}</p>
        <p className='intro'><b>About:</b> {shortIntro}</p>
        <button className='btn' onClick={()=> logger(bookName, characters )}>Click to print to the console</button>
    </div>
  </div>
)
}

export default App