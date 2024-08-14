import React from 'react';

const ScriptOutputPage = () => (
    <div>
        <h1>Script Output</h1>
        <iframe src="http://192.168.253.177:8280" width="100%" height="600px" title="Script Output" allow='geolocation;microphone,camera'></iframe>
    </div>
);

export default ScriptOutputPage;