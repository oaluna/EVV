import React, { useState, useEffect } from "react";
import DashboardHeader from "../../components/DashboardHeader";

import all_visits from "../../constants/visits";
import evv_params from "../../constants/evv"
import { calculateRange, sliceData } from "../../utils/table-pagination";

import "../styles.css";
import DoneIcon from "../../assets/icons/done.svg";
import CancelIcon from "../../assets/icons/cancel.svg";
import RefundedIcon from "../../assets/icons/refunded.svg";

function VisitsList() {
  const [search, setSearch] = useState("");
  const [visits, setVisits] = useState(all_visits);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    setPagination(calculateRange(all_visits, 5));
    setVisits(sliceData(all_visits, page, 5));
  }, [page]);

  // Search
  const __handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value !== "") {
      let search_results = visits.filter(
        (item) =>
          item.first_name.toLowerCase().includes(search.toLowerCase()) ||
          item.last_name.toLowerCase().includes(search.toLowerCase()) ||
          item.product.toLowerCase().includes(search.toLowerCase())
      );
      setVisits(search_results);
    } else {
      __handleChangePage(1);
    }
  };

  // Change Page
  const __handleChangePage = (new_page) => {
    setPage(new_page);
    setVisits(sliceData(all_visits, new_page, 5));
  };

  return (
    <div className="dashboard-content">
    

      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2>Staff List</h2>
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

        <table>
          <thead>
            <th>ID</th>
            <th>DATE</th>
            <th>STATUS</th>
            <th>COSTUMER</th>
            <th>PRODUCT</th>
            <th>REVENUE</th>
          </thead>

          {visits.length !== 0 ? (
            <tbody>
              {visits.map((visit, index) => (
                <tr key={index}>
                  <td>
                    <span>{visit.id}</span>
                  </td>
                  <td>
                    <span>{visit.date}</span>
                  </td>
                  <td>
                    <div>
                      {visit.status === "Paid" ? (
                        <img
                          src={DoneIcon}
                          alt="paid-icon"
                          className="dashboard-content-icon"
                        />
                      ) : visit.status === "Canceled" ? (
                        <img
                          src={CancelIcon}
                          alt="canceled-icon"
                          className="dashboard-content-icon"
                        />
                      ) : visit.status === "Refunded" ? (
                        <img
                          src={RefundedIcon}
                          alt="refunded-icon"
                          className="dashboard-content-icon"
                        />
                      ) : null}
                      <span>{visit.status}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <img
                        src={visit.avatar}
                        className="dashboard-content-avatar"
                        alt={visit.first_name + " " + visit.last_name}
                      />
                      <span>
                        {visit.first_name} {visit.last_name}
                      </span>
                    </div>
                  </td>
                  <td>
                    <span>{visit.product}</span>
                  </td>
                  <td>
                    <span>${visit.price}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>

        {visits.length !== 0 ? (
          <div className="dashboard-content-footer">
            {pagination.map((item, index) => (
              <span
                key={index}
                className={item === page ? "active-pagination" : "pagination"}
                onClick={() => __handleChangePage(item)}
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <div className="dashboard-content-footer">
            <span className="empty-table">No data</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default VisitsList;
