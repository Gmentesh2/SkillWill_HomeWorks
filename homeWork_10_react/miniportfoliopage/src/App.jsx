// მოახდინე პროექტის ინიციალიზაცია
// create-react-app პაკეტის გამოყენებით და
// npx ბრძანებით
// ● შეიტანე ცვლილებები საწყის გვერდზე,
// დაამსგავსე ის მარტივ პორტფოლიოს
// გვერდს
// ● ჩასვი სასურველი სურათი და მოკლე
// ტექსტური ინფორმაცია
import './App.css';
import myImage from './assets/myImage.jpg';
function App() {
  return (
    <div className="container">
        <div className='card'>
            <Image />
            <Review />
            <MySkills />
        </div>
    </div>
  );
}
function Image(){
  return <div className='imgDiv'>
          <img className='img' src={myImage}/>
        </div>
}
function Review(){
  return <div className='reviewDiv'>
    <h1 className='name'>Giorgi Menteshashvili</h1>
    <p className='text'> I am a highly skilled and motivated programmer.
        I thrive on solving complex problems and enjoy tackling challenging coding tasks
        In my free time i reading books and playing piano
    </p>
  </div>
}
function MySkills(){
  return <div className='skillsDiv'>
    <h3>Markup Languages</h3>
    <p className='html'>HTML</p>
    <h3>Style Language</h3>
    <p className='css'>CSS</p>
    <h3>Programing Languages</h3>
    <p className="javascript">Javascript</p>
    <h3>Frameworks & Tools</h3>
    <p className='react'>React & Bootstrap</p>
  </div>
}
export default App;
