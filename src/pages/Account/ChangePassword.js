import { useState } from "react";
import axios from 'axios'

const ChangePassword = () => {
	const [passwordNew, setPasswordNew] = useState("");
  const [passwordOld, setPasswordOld] = useState("");
	const [error, setError] = useState("")
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
  return (
    <>
      <div>
        <h6>Change Password API</h6>
        <div>
          <input
            className="border border-1 border-gray-400 rounded-sm text-xs px-3 py-1 mx-2"
            type="password"
            placeholder="New Password"
            value={passwordNew}
            onChange={(event) => setPasswordNew(event.target.value)}
          />
          <input
            className="border border-1 border-gray-400 rounded-sm text-xs px-3 py-1 mx-2"
            type="password"
            placeholder="Old Password"
            value={passwordOld}
            onChange={(event) => setPasswordOld(event.target.value)}
          />
          <button
            className="bg-gradient-to-tr from-[#0e1862]   to-[#29539B] px-3 py-1 text-gray-50 rounded-md shadow-sm"
            type="button"
            onClick={handleChangePassword}
          >
            Change Password
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
