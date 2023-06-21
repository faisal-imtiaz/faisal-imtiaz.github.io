import CodeIcon from "@mui/icons-material/Code";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <CodeIcon style={{ fontSize: "260px" }} />
      </div>
      <div>
        <h2>Sorry for inconvenience, site is under construction actively</h2>
        <h4>Meanwhile, you can use alternative route - Thanks</h4>
        <a href="https://www.linkedin.com/in/faisal-imtiaz" target="_blank">
          <span style={{ cursor: "pointer", padding: "5px" }} ><LinkedInIcon /></span>
          </a>
      </div>
    </div>
  );
}

export default App;


