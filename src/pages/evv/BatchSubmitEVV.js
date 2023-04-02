import { useState, useEffect } from "react";
import axios from "axios";

const BatchSubmitEVV = ({ passwordNew, passwordOld }) => {
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
  const [error, setError] = useState(null);

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

  const handleBatchLoadEVVRecords = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.BASE_URL}/claims/submitter/${submitterId}/evv`,
        visit,
        { headers: { Authorization: `Bearer ${process.env.EMEDNY_API_KEY}` } }
      );
      setVisit({ ...visit, [e.target.name]: e.target.value });
      setError(null);
    } catch (error) {
      setError(error.response.data);
    }
  };

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
      setVisit({ ...visit, [e.target.name]: e.target.value });
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
  ]); // Reset error sta
  return (
    <>
      <h6>Batch Load EVV Records API</h6>
      <div className="flex flex-col space-y-3 w-64 my-3">
        <input
          className="border border-1 border-gray-400 rounded-sm text-xs px-3 py-1 mx-2"
          type="text"
          placeholder="Submitter Id"
          value={submitterId}
          onChange={(event) => setSubmitterId(event.target.value)}
        />
        <input
          className="border border-1 border-gray-400 rounded-sm text-xs px-3 py-1 mx-2"
          type="text"
          placeholder="Visit Id"
          value={visit.id ?? ""}
          onChange={(event) => setVisit({ ...visit, id: event.target.value })}
        />
        <input
          className="border border-1 border-gray-400 rounded-sm text-xs px-3 py-1 mx-2"
          type="text"
          placeholder="Client Id"
          value={visit.clientId ?? ""}
          onChange={(event) =>
            setVisit({ ...visit, clientId: event.target.value })
          }
        />
        <input
          className="border border-1 border-gray-400 rounded-sm text-xs px-3 py-1 mx-2"
          type="text"
          placeholder="Employee Id"
          value={visit.employeeId ?? ""}
          onChange={(event) =>
            setVisit({ ...visit, employeeId: event.target.value })
          }
        />
      </div>
      <button
        className="bg-gradient-to-tr from-[#0e1862]   to-[#29539B] px-3 py-1 text-gray-50 rounded-md shadow-sm"
        type="button"
        onClick={handleBatchLoadEVVRecords}
      >
        Batch Load EVV Records
      </button>
    </>
  );
};

export default BatchSubmitEVV;
