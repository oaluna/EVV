import React from "react";

const DeleteEVVRecord = ({
  submitterId,
  transactionId,
  setSubmitterId,
  setTransactionId,
  handleDeleteEVVRecord,
}) => {
  return (
    <>
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
        placeholder="Transaction Id"
        value={transactionId}
        onChange={(event) => setTransactionId(event.target.value)}
      />
      <button
        className="bg-gradient-to-tr from-[#0e1862]   to-[#29539B] px-3 py-1 text-gray-50 rounded-md shadow-sm"
        type="button"
        onClick={handleDeleteEVVRecord}
      >
        Delete EVV Record
      </button>
      <div>DeleteEVVRecord</div>
    </>
  );
};

export default DeleteEVVRecord;
