// import logo from './logo.svg';

import './App.css';
import Antdesign from './Components/Antdesign';
import Cinputs from './Components/Cinputs';
import Headcap from './Components/Headcap';
function App() {
  return (
    <div className="body">
      {/* <img src={logo} alt="" /> */}
      <header>
        <p>Logo</p>
        <div className="buttons">
          <p>Button 1</p>
          <p>Button 2</p>
          <p>Button 3</p>
          <p>Button 4</p>
        </div>
        <div className="rightbuttons">
          <p>Button 1</p>
          <p>Button 2</p>
        </div>
      </header>



      <div className="welcome">
        <div className="heading">Welcome to the best website template!</div>
        <p>Are you looking for a solution to your problem? Look no further, because we have the answer. Our team of experts has the skills and experience to deliver top-quality results.</p>
        <div className="btn">
          <p>Button 1</p>
          <p>Button 2</p>
        </div>
      </div>

      <div className="twopics">
        <img src="/media/firstimg.png" alt="" />
        <img src="/media/handsdown.png" alt="" />

      </div>
      <div className="headersInterface">
        <Antdesign />
        <Antdesign />
        <Antdesign />
      </div>

      <div className="reason">
        <div className="why">
          <p>Why you should choose us</p>
          <p>Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background</p>
          <p>Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background</p>
        </div>
        <div className="whypics">
          <img src="/media/art1.png" alt="" />
          <img src="/media/art2.png" alt="" />
        </div>
      </div>


      <div className="reason">
        <div className="why">
          <p>Why you should choose us</p>
          <img src="/media/flowerimg.png" alt="" />
        </div>
        <div className="why">
          <p>Subheader</p>
          <p>Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background</p>
          <p>Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background</p>
        </div>
      </div>



      <div className="gallery">
        <div className="handdownimg">
          <img src="/media/handsdown.png" alt="" />

        </div>
        <div className="imgs4">
          <img src="/media/cameraimg.png" alt="" />
          <img src="/media/secondimg.png" alt="" />
          <img src="/media/thirdimg.png" alt="" />
          <img src="/media/fourthimg.png" alt="" />
        </div>
      </div>


      <div className="meet-team">
        <p>Meet the team</p>
        <p>Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background</p>
      </div>

      <div className="avatar-images">
        <Headcap img="/media/Avatar image1.png" />
        <Headcap img="/media/Avatar image2.png" />
        <Headcap img="/media/Avatar image3.png" />
        <Headcap img="/media/Avatar image4.png" />
        <Headcap img="/media/Avatar image5.png" />
        <Headcap img="/media/Avatar image6.png" />
        <Headcap img="/media/Avatar image7.png" />
        <Headcap img="/media/Avatar image8.png" />
        <Headcap img="/media/Avatar image9.png" />
        <Headcap img="/media/Avatar image10.png" />
      </div>

      <div className="phone-interface">
        <div className="phone-interfaceimg">
          <img src="/media/phone-interface.png" alt="" />
        </div>
        <div className="contacts">
          <div className="contactheader">
            <h1>Contact us</h1>
            <p>Our lovely team would love to hear from you</p></div>

          <div className="inputs">
            <Cinputs label="First name" />
            <Cinputs label="Last name" />
            <Cinputs label="Email" />
            <Cinputs label="Phone number" />

          </div>
          <div className="input2">
            <Cinputs label="Issues" />

          </div>

          <button className='submitbutton'>
            <p>Submit</p>
            <img src="/media/submitvector.png" alt="" />
          </button>

          <div className="logos">
            <p>Ai</p>
            <img src="/media/googlevector.png" alt="" />
            <img src="/media/playvector.png" alt="" />
          </div>
        </div>
      </div>

      <div className="reason">
        <div className="why">
          <p>Logo</p>
          <p>Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background</p>
        </div>

        <div className="subscirbe">
          <div className="subscribebuttons">
            <p>Contact us</p>
            <p>Button 1</p>
            <p>Button 2</p>
            <p>Button 3</p>
          </div>

          <div className="subscribenow">
            <p>Suscribe now</p>
            <p>Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design.</p>
            <div className="lastbutton">
              <input type="text" placeholder='Input something' />
              <button>Button</button>
            </div>
          </div>
        </div>


      </div>


    </div>
  );
}

export default App;
