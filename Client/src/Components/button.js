import React,{useState} from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
const RunScriptButton = () => {
    const runScript = async () => {
        try {
            const response = await fetch('http://192.168.253.177:5001/run-script', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                
            });
            const data = await response.json();
            console.log('Script output:', data);
            alert("Script created successfully");
            window.location.href="/script-output"
        } catch (error) {
            console.error('Error running script:', error);
        }
    };
    const [dockerStatus, setDockerStatus] = useState(null);

  const checkDocker = async () => {
    try {
      const response = await axios.get('http://192.168.253.177:5001/check-docker');
      setDockerStatus(response.data);
    } catch (error) {
      setDockerStatus({ installed: false, message: 'Error checking Docker status' });
    }
  };
    return (
        <>
        
        <button onClick={runScript}>
            Run Script
        </button>
        <button onClick={checkDocker}>Check Docker</button>
        {dockerStatus && (
          <p>
            {dockerStatus.installed
              ? `Docker is installed: ${dockerStatus.message}`
              : dockerStatus.message}
          </p>
        )}
        </>
  
    );
};

export default RunScriptButton;