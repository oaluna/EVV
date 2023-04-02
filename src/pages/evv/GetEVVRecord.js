import React from 'react'

const GetEVVRecord = ({ setSubmitterId, setTransactionId,handleGetEVVRecord, ...props }) => {
	return (
		<>
		<div>
		<input
			className="border border-1 border-gray-400 rounded-sm text-xs px-3 py-1 mx-2"
			type="text"
			placeholder="Submitter Id"
			value={props.submitterId}
			onChange={(event) => setSubmitterId(event.target.value)}
		/>
		<input
			className="border border-1 border-gray-400 rounded-sm text-xs px-3 py-1 mx-2"
			type="text"
			placeholder="Transaction Id"
			value={props.transactionId}
			onChange={(event) => setTransactionId(event.target.value)}
		/>
		<button
			className="bg-gradient-to-tr from-[#0e1862]   to-[#29539B] px-3 py-1 text-gray-50 rounded-md shadow-sm"
			type="button"
			onClick={handleGetEVVRecord}
		>
			Get EVV Record
		</button>
		
		<table className="overflow-x-scroll w-full mx-0 table-striped bg-gradient-to-tr py-1 px-2 from-[#0e1862] to-[#29539B]">
            <thead>
              <tr>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  Transaction ID
                </th>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  Member ID
                </th>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  Date of Birth
                </th>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  Provider Name
                </th>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  National Provider ID
                </th>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  Taxpayer ID
                </th>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  Provider Address
                </th>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  Provider ID
                </th>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  Provider Rate Code
                </th>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  Procedure Code
                </th>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  Procedure Mod Code
                </th>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  Service Start Date/Time
                </th>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  Service End Date/Time
                </th>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  Service Start Location
                </th>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  Service End Location
                </th>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  Service Provider First Name
                </th>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  Service Provider Last Name
                </th>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  Service Provider Phone Number
                </th>
                <th className="text-[10px] px-1 tracking-tighter text-sky-200 font-medium w-36">
                  Caregiver ID
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(props.visit).length > 0 && (
                <>
                  <tr key={props.visit.transactionId}>
                    <td>{props.visit.keys}</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
	</div>
</>
	)
}

export default GetEVVRecord