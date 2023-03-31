import React, { useState, useEffect } from "react";
import axios from "axios";

// Replace with actual URL for the API endpoint

const ElectronicVisitVerification = () => {
  const [submitterId, setSubmitterId] = useState(""); // Default submitter id state
  const [transactionId, setTransactionId] = useState(""); // Default transaction id state
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [nationalProviderId, setNationalProviderId] = useState("");
  const [providerId, setProviderId] = useState("");
  const [providerAddress, setProviderAddress] = useState("");
  const [taxPayerId, setTaxPayerId] = useState("");
  const [procedureCode, setProcedureCode] = useState("");
  const [procedureModCode, setProcedureModCode] = useState("");
  const [providerRateCode, setProviderRateCode] = useState("");
  const [serviceStartDateTime, setServiceStartDateTime] = useState("");
  const [serviceDateEndTime, setServiceEndDateTime] = useState("");
  const [serviceStartLocation, setServiceStartLocation] = useState("");
  const [serviceEndLocation, setServiceEndLocation] = useState("");
  const [serviceProviderFirstName, setServiceProviderFirstName] = useState("");
  const [serviceProviderLastName, setServiceProviderLastName] = useState("");
  const [serviceProviderPhoneNumber, setServiceProviderPhoneNumber] =
    useState("");
  const [caregiverId, setCaregiverId] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [passwordOld, setPasswordOld] = useState("");
  const [visit, setVisit] = useState({
    transactionId: "",
    memberId: "",
    dateOfBirth: "",
    providerName: "",
    nationalProviderId: "",
    providerId: "",
    taxPayerId: "",
    providerAddress: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
    },
    providerRateCode: "",
    procedureCode: "",
    procedureModCode: [],
    serviceStartDateTime: "",
    serviceEndDateTime: "",
    serviceStartLocation: "",
    serviceEndLocation: "",
    serviceProviderFirstName: "",
    serviceProviderLastName: "",
    serviceProviderPhoneNumber: "",
    caregiverId: "",
  }); // Default visit object state
  const [error, setError] = useState(null); // Default error state
  // Change password API call
  const handleChangePassword = async () => {
    try {
      await axios.post(
        `${process.env.BASE_URL}/changePassword`,
        { passwordNew, passwordOld },
        { headers: { Authorization: `Bearer ${process.env.EMEDNY_API_KEY}` } }
      );
      setPasswordNew("");
      setPasswordOld("");
      setError(null);
    } catch (error) {
      setError(error.response.data);
    }
  };
  // Batch Load EVV Records API call
  const handleBatchLoadEVVRecords = async (e) => {
		e.preventDefault();
    try {
      await axios.post(
        `${process.env.BASE_URL}/claims/submitter/${submitterId}/evv`,
        visit,
        { headers: { Authorization: `Bearer ${process.env.EMEDNY_API_KEY}` } }
      );
      setVisit({ ...visit, [e.target.name]: e.target.value});
      setError(null);
    } catch (error) {
      setError(error.response.data);
    }
  };
  // Get EVV Record API call
  const handleGetEVVRecord = async () => {
    try {
      const response = await axios.get(
        `${process.env.BASE_URL}/claims/submitter/${submitterId}/evv/${transactionId}`,
        { headers: { Authorization: `Bearer ${process.env.EMEDNY_API_KEY}` } }
      );
      setVisit(response.data);
      setError(null);
    } catch (error) {
      setError(error.response.data);
    }
  };
  // Delete EVV Record API call
  const handleDeleteEVVRecord = async (e) => {
    try {
      await axios.delete(
        `${process.env.BASE_URL}/claims/submitter/${submitterId}/evv/${transactionId}`,
        { headers: { Authorization: `Bearer ${process.env.EMEDNY_API_KEY}` } }
      );
      setVisit(visit);
      setError(null);
    } catch (error) {
      setError(error.response.data);
    }
  };
  // New EVV Record API call
  const handleNewEVVRecord = async (e) => {
    try {
      await axios.put(
        `${process.env.BASE_URL}/claims/submitter/${submitterId}/evv/${transactionId}`,
        visit,
        { headers: { Authorization: `Bearer ${process.env.EMEDNY_API_KEY}` } }
      );
      setVisit({ ...visit, [e.target.name]: e.target.value});
      setError(null);
    } catch (error) {
      setError(error.response.data);
    }
  };
  useEffect(() => {
    setError(null);
  }, [
    submitterId,
    transactionId,
    nationalProviderId,
    providerId,
    providerAddress,
    taxPayerId,
    procedureCode,
    procedureModCode,
    providerRateCode,
    serviceStartDateTime,
    serviceDateEndTime,
    serviceStartLocation,
    serviceEndLocation,
    serviceProviderFirstName,
    serviceProviderLastName,
    serviceProviderPhoneNumber,
    caregiverId,
    visit,
    passwordNew,
    passwordOld,
  ]); // Reset error state when these values have changed

  return (
    <div className="p-5 w-full h-full">
      <div>
        <h6 className="text-lg">Login API</h6>
      </div>
      <div>
        <h6>Change Password API</h6>
        <div>
          <input
            type="password"
            placeholder="New Password"
            value={passwordNew}
            onChange={(event) => setPasswordNew(event.target.value)}
          />
          <input
            type="password"
            placeholder="Old Password"
            value={passwordOld}
            onChange={(event) => setPasswordOld(event.target.value)}
          />
          <button type="button" onClick={handleChangePassword}>
            Change Password
          </button>
        </div>
        <h6>Batch Load EVV Records API</h6>
        <div>
          <input
            type="text"
            placeholder="Submitter Id"
            value={submitterId}
            onChange={(event) => setSubmitterId(event.target.value)}
          />
          <input
            type="text"
            placeholder="Visit Id"
            value={visit.id ?? ""}
            onChange={(event) => setVisit({ ...visit, id: event.target.value })}
          />
          <input
            type="text"
            placeholder="Client Id"
            value={visit.clientId ?? ""}
            onChange={(event) =>
              setVisit({ ...visit, clientId: event.target.value })
            }
          />
          <input
            type="text"
            placeholder="Employee Id"
            value={visit.employeeId ?? ""}
            onChange={(event) =>
              setVisit({ ...visit, employeeId: event.target.value })
            }
          />
          <button type="button" onClick={handleBatchLoadEVVRecords}>
            Batch Load EVV Records
          </button>
        </div>
        <h6>Get EVV Record API</h6>
        <div>
          <input
            type="text"
            placeholder="Submitter Id"
            value={submitterId}
            onChange={(event) => setSubmitterId(event.target.value)}
          />
          <input
            type="text"
            placeholder="Transaction Id"
            value={transactionId}
            onChange={(event) => setTransactionId(event.target.value)}
          />
          <button type="button" onClick={handleGetEVVRecord}>
            Get EVV Record
          </button>
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
          <input
            type="text"
            placeholder="Submitter Id"
            value={submitterId}
            onChange={(event) => setSubmitterId(event.target.value)}
          />
          <input
            type="text"
            placeholder="Transaction Id"
            value={transactionId}
            onChange={(event) => setTransactionId(event.target.value)}
          />
          <button type="button" onClick={handleDeleteEVVRecord}>
            Delete EVV Record
          </button>
        </div>
        \n <h6>New EVV Record API</h6>\n{" "}
        <div>
          <input
            type="text"
            placeholder="Submitter Id"
            value={submitterId}
            onChange={(event) => setSubmitterId(event.target.value)}
          />
          <input
            type="text"
            placeholder="Transaction Id"
            value={transactionId}
            onChange={(event) => setTransactionId(event.target.value)}
          />
          <input
            type="text"
            placeholder="Client Id"
            value={visit.clientId ?? ""}
            onChange={(event) =>
              setVisit({ ...visit, clientId: event.target.value })
            }
          />
          <input
            type="text"
            placeholder="Employee Id"
            value={visit.employeeId ?? ""}
            onChange={(event) =>
              setVisit({ ...visit, employeeId: event.target.value })
            }
          />
          <button type="button" onClick={handleNewEVVRecord}>
            New EVV Record
          </button>
        </div>
        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
};

export default ElectronicVisitVerification;
