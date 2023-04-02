import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import evv_params from "../../constants/evv";
import rows from "./rows";
import { calculateRange, sliceData } from "../../utils/table-pagination";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  width: "100%",
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    fontSize: 8,
    minWidth: "75px",
    textAlign: "right",
    lineHeight: 1.5,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 8,
    width: "100%",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  width: "100%",
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    width: "100%",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
    width: "100%",
  },
}));

export default function CustomizedTables() {
  const [search, setSearch] = useState("");
  const [shifts, setShifts] = useState(evv_params);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    setPagination(calculateRange(evv_params, 5));
    setShifts(sliceData(evv_params, page, 5));
  }, [page]);

  // Search
  const __handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value !== "") {
      let search_results = shifts.filter(
        (item) =>
          item.first_name.toLowerCase().includes(search.toLowerCase()) ||
          item.last_name.toLowerCase().includes(search.toLowerCase()) ||
          item.product.toLowerCase().includes(search.toLowerCase())
      );
      setShifts(search_results);
    } else {
      __handleChangePage(1);
    }
  };

  // Change Page
  const __handleChangePage = (new_page) => {
    setPage(new_page);
    setShifts(sliceData(evv_params, new_page, 5));
  };

  return (
    <>
      <div className="dashboard-content-header" style={{ padding: "1.5rem" }}>
        <h2>Scheduler</h2>
        <div className="dashboard-content-search">
          <input
            type="text"
            value={search}
            placeholder="Search.."
            className="dashboard-content-input"
            onChange={(e) => __handleSearch(e)}
          />
        </div>
      </div>
      <TableContainer component={Paper} sx={{ width: "80vw", m: 2 }}>
        <Table aria-label="customized table">
          <TableHead className="bg-gradient-to-t from-[#1E3B70]   to-[#29539B]">
            <TableRow className="text-[lightblue]">
              <StyledTableCell align="right">Transaction Id</StyledTableCell>
              <StyledTableCell align="right">Member Id</StyledTableCell>
              <StyledTableCell align="right">Date of Birth</StyledTableCell>
              <StyledTableCell align="right">Provider Name</StyledTableCell>
              <StyledTableCell align="right">
                National Provider ID
              </StyledTableCell>
              <StyledTableCell align="right">Provider ID</StyledTableCell>
              <StyledTableCell align="right">Taxpayer ID</StyledTableCell>
              <StyledTableCell align="right">Provider Address</StyledTableCell>
              <StyledTableCell align="right">
                Provider Rate Code
              </StyledTableCell>
              <StyledTableCell align="right">Procedure Code</StyledTableCell>
              <StyledTableCell align="right">
                Procedure Mod Code
              </StyledTableCell>
              <StyledTableCell align="right">
                Service Start Date/Time
              </StyledTableCell>
              <StyledTableCell align="right">
                Service End Date/Time
              </StyledTableCell>
              <StyledTableCell align="right">
                Service Start Location
              </StyledTableCell>
              <StyledTableCell align="right">
                Service End Location
              </StyledTableCell>
              <StyledTableCell align="right">
                Service Provider First Name
              </StyledTableCell>
              <StyledTableCell align="right">
                Service Provider Last Name
              </StyledTableCell>
              <StyledTableCell align="right">
                Service Provider Phone Number
              </StyledTableCell>
              <StyledTableCell align="right">Caregiver ID</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.transactionId}>
                <StyledTableCell align="right">
                  {row.transactionId}
                </StyledTableCell>
                <StyledTableCell align="right">{row.memberId}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.dateOfBirth}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.providerName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.nationalProviderId}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.providerId}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.taxPayerId}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.providerAddress}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.providerRateCode}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.procedureCode}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.procedureModCode}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.serviceStartDateTime}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.serviceEndDateTime}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.serviceStartLocation}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.serviceEndLocation}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.serviceProviderFirstName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.serviceProviderLastName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.serviceProviderPhoneNumber}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.caregiverId}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
