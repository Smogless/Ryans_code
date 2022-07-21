import './App.css';
import MainPageBanner from './main page banner.png'

function App() {
  return (
    <div className="App">
      <img src={MainPageBanner} className="AppMainPageBar"/>
      <button onClick={() => console.log("searched")} className="SearchBar">
        Search Anything
      </button>

      <button onClick={() => console.log("New")} className="New">
        New
      </button>

      <button onClick={() => console.log("Hot")} className="Hot">
        Hot
      </button>

      <button onClick={() => console.log("Joined")} className="Joined">
        Joined
      </button>

      <button onClick={() => console.log("Saved")} className="Saved">
        Saved
      </button>

      <button onClick={() => console.log("Notifications")} className="Notifications">
        Notifications
      </button>

      <div className="PopularCommentsOutline">
        <span className="PopularComments" style={{width:"346px", height:"34px", left:"60px", top:"15px"}}>
          Popular Comments
        </span>
        <span className="PopularCommentsContent" style={{width:"268px", height:"225px", left:"60px", top:"50px"}}>
          1. College Applications
          2. Extracurriculars 
          3. Homework Help
          4. Internship 
          5. Sprint programs
        </span>
      </div>

      <div className="PopularCommentsLine" style={{width:"314px", height:"0px", left:"1237px", top:"309px"}}></div>

      <div rectangle1>
        <div className="Rectangle1" ></div>
        <span className="Rectangle1Extracurricular" >
            Extracurriculars
        </span>
        <span className="Rectangle1posted" style={{width:"198px", height:"19px", left:"430px", top:"441px"}}>
            Posted by Sharon Mitchell
        </span>
        <div className="Rectangle1Ellipse" style={{width:"95px", height:"19px", left:"610px", top:"441px"}}></div>
        <span className="Rectangle1Student" style={{width:"64px", height:"13px", left:"630px", top:"441px"}}>
            Student
        </span>
        <span className="Rectangle1time" >
            5 minutes ago
        </span>
        <span className="Rectangle1message" >
          Can anyone give me any tips on how to be a better softball player?
        </span>

        <button onClick={() => console.log("Reply")} className="Rectangle1Reply">
          reply
        </button>
        <button onClick={() => console.log("Repost")} className="Rectangle1Repost">
          repost
        </button>
        <button onClick={() => console.log("Save")} className="Rectangle1Save">
          save
        </button>
        <button onClick={() => console.log("Send")} className="Rectangle1Send">
          send
        </button>
        <span className="Rectangle1ID" >
          16
        </span>
      </div>

      <div leaderboard>
        <div className="LeaderboardOutline" ></div>
        <span className="LeaderboardText" style={{width:"121px", height:"24px", left:"1344px", top:"687px"}}>
          Leaderboards
        </span>
      </div>
    </div>
  );  
}

export default App;
