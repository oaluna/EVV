import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Replace with actual URL for the API endpoint
const BASE_URL = 'https://api.emednytest.io/claims/';

const ElectronicVisitVerification = () => {
  const [submitterId, setSubmitterId] = useState(''); // Default submitter id state
  const [transactionId, setTransactionId] = useState(''); // Default transaction id state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [passwordNew, setPasswordNew] = useState('');
  const [passwordOld, setPasswordOld] = useState('');
  const [visit, setVisit] = useState({}); // Default visit object state
  const [error, setError] = useState(null); // Default error state

  // Login API call
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, { username, password });
      setToken(response.data.token);
    } catch (error) {
      setError(error.response.data);
    }
  };

  // Verify token API call
  const handleVerifyToken = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/verifyToken`, { token });
      console.log(response.data);
    } catch (error) {
      setError(error.response.data);
    }
  };

  // Change password API call
  const handleChangePassword = async () => {
    try {
      await axios.post(`${BASE_URL}/changePassword`, { passwordNew, passwordOld }, { headers: { Authorization: `Bearer ${token}` } });
      setPasswordNew('');
      setPasswordOld('');
      setError(null);
    } catch (error) {
      setError(error.response.data);
    }
  };

  // Batch Load EVV Records API call
  const handleBatchLoadEVVRecords = async () => {
    try {
      await axios.post(
        `${BASE_URL}/claims/submitter/${submitterId}/evv`,
        visit,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setVisit({});
      setError(null);
    } catch (error) {
      setError(error.response.data)   }
  };

  // Get EVV Record API call
  const handleGetEVVRecord = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/claims/submitter/${submitterId}/evv/${transactionId}`, { headers: { Authorization: `Bearer ${token}` } });
      setVisit(response.data);
      setError(null);
    } catch (error) {      setError(error.response.data);
    }
  };

  // Delete EVV Record API call
  const handleDeleteEVVRecord = async () => {
    try {
      await axios.delete(`${BASE_URL}/claims/submitter/${submitterId}/evv/${transactionId}`, { headers: { Authorization: `Bearer ${token}` } });
      setVisit({});
      setError(null);
    } catch (error) {
      setError(error.response.data);
    }
  };

  // New EVV Record API call
  const handleNewEVVRecord = async () => {
    try {
      await axios.put(
        `${BASE_URL}/claims/submitter/${submitterId}/evv/${transactionId}`,
        visit,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setVisit({});
      setError(null);
    } catch (error) {
      setError(error.response.data);
    }
  };

  useEffect(() => {
    setError(null);
  }, [submitterId, transactionId, visit, token, passwordNew, passwordOld]); // Reset error state when these values have changed

  return (
    <div>
      <h6>Login API</h6>
      <div>
        <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type="button" onClick={handleLogin}>Login</button>
      </div>
      <h6>Verify Token API</h6>
      <div>
        <input type="text" placeholder="Token" value={token} onChange={(event) => setToken(event.target.value)} />
        <button type="button" onClick={handleVerifyToken}>Verify Token</button>
      </div>
      <h6>Change Password API</h6>
      <div>
        <input type="password" placeholder="New Password" value={passwordNew} onChange={(event) => setPasswordNew(event.target.value)} />
        <input type="password" placeholder="Old Password" value={passwordOld} onChange={(event) => setPasswordOld(event.target.value)} />
        <button type="button" onClick={handleChangePassword}>Change Password</button>
      </div>
      <h6>Batch Load EVV Records API</h6>
      <div>
        <input type="text" placeholder="Submitter Id" value={submitterId} onChange={(event) => setSubmitterId(event.target.value)} />
        <input type="text" placeholder="Visit Id" value={visit.id ?? ''} onChange={(event) => setVisit({ ...visit, id: event.target.value })} />
        <input type="text" placeholder="Client Id" value={visit.clientId ?? ''} onChange={(event) => setVisit({ ...visit, clientId: event.target.value })} />
        <input type="text" placeholder="Employee Id" value={visit.employeeId ?? ''} onChange={(event) => setVisit({ ...visit, employeeId: event.target.value })} />
        <button type="button" onClick={handleBatchLoadEVVRecords}>Batch Load EVV Records</button>
      </div>
      <h6>Get EVV Record API</h6>
      <div>
        <input type="text" placeholder="Submitter Id" value={submitterId} onChange={(event) => setSubmitterId(event.target.value)} />
        <input type="text" placeholder="Transaction Id" value={transactionId} onChange={(event) => setTransactionId(event.target.value)} />
        <button type="button" onClick={handleGetEVVRecord}>Get EVV Record</button>
      </div>
      {Object.keys(visit).length > 0 && (
        <>
          <h6>EVV Record</h6>
          <div>
            <p>Id: {visit.id}</p>
            <p>Client Id: {visit.clientId}</p>
            <p>Employee Id: {visit.employeeId}</p>
          </div>
        </>
      )}
      <h6>Delete EVV Record API</h6>
      <div>
        <input type="text" placeholder="Submitter Id" value={submitterId} onChange={(event) => setSubmitterId(event.target.value)} />
        <input type="text" placeholder="Transaction Id" value={transactionId} onChange={(event) => setTransactionId(event.target.value)} />
        <button type="button" onClick={handleDeleteEVVRecord}>Delete EVV Record</button>
      </div>\n      <h6>New EVV Record API</h6>\n      <div>
        <input type="text" placeholder="Submitter Id" value={submitterId} onChange={(event) => setSubmitterId(event.target.value)} />
        <input type="text" placeholder="Transaction Id" value={transactionId} onChange={(event) => setTransactionId(event.target.value)} />
        <input type="text" placeholder="Client Id" value={visit.clientId ?? ''} onChange={(event) => setVisit({ ...visit, clientId: event.target.value })} />
        <input type="text" placeholder="Employee Id" value={visit.employeeId ?? ''} onChange={(event) => setVisit({ ...visit, employeeId: event.target.value })} />
        <button type="button" onClick={handleNewEVVRecord}>New EVV Record</button>
      </div>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default ElectronicVisitVerification;
