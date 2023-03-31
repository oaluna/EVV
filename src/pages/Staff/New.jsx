import { useState } from "react";
//import { FormControl } from "@mui/material/FormControl";
//import { InfoRounded, }
import "./styles.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Salutation = () => (
  <Accordion sx={{ position: "relative" }}>
    <AccordionSummary
      expandIcon={<ExpandMore />}
      aria-label="Expand"
      aria-controls="-content"
      id="-header"
    >
      <Typography>Salutation: </Typography>
    </AccordionSummary>

    {["Mr.", "Mrs.", "Miss", "Ms.", "Mx.", "Doctor", "Them", "They"].map(
      (item) => (
        <>
          <AccordionDetails sx={{ position: "relative", zIndex: 10 }}>
            {item}
          </AccordionDetails>
        </>
      )
    )}
  </Accordion>
);

const Gender = () => (
  <Accordion sx={{ position: "relative" }}>
    <AccordionSummary
      expandIcon={<ExpandMore />}
      aria-label="Expand"
      aria-controls="-content"
      id="-header"
    >
      <Typography>Gender (please select): </Typography>
    </AccordionSummary>
    {[
      "Male",
      "Female",
      "Intersex",
      "Non-Binary",
      "Unspecified",
      "Prefer Not To Say",
    ].map((item) => (
      <>
        <AccordionDetails sx={{ position: "relative", zIndex: 10 }}>
          {item}
        </AccordionDetails>
      </>
    ))}
  </Accordion>
);

const NewStaff = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();

    setInput(e.target.value);
  };
  return (
    <>
      <div className="flex flex-row col-span-12">
        <div className="mx-3 mt-5 w-full h-full col-6">
          <div className="flex flex-col">
            <h3 className="text-lg font-black">Staff Detail</h3>{" "}
            <form className="h-[80vh] col-12">
              <label className="control-label">
                No Access
                <i
                  data-toggle="tooltip"
                  title="User will not be able to access ShiftCare. This user will not be counted towards subscription limit either."
                  className="fas fa-info-circle mx-1"
                  
                ></i>
                <span className="sr-only">
                  User will not be able to access ShiftCare. This user will not
                  be counted towards subscription limit either.
                </span>
              </label>{" "}
              <span>
                <label className="el-checkbox ml-16 my-3">
                  <span className="el-checkbox__input">
                    <span className="el-checkbox__inner"></span>
                   
                  </span>
                </label>
              </span>
              <a
                data-turbolinks="false"
                target="_blank"
                href="/users/staff/0?tab=details"
                className="pull-right edit-s"
              >
                VIEW MORE
              </a>
              <div className="box-body">
                <div className="flex flex-row space-y-1">
                  <div className="sm:col-6 md:col-6">
                    <div className="flex flex-row">
                      <div className="xs:col-12">
                        <div className="form-horizontal flex flex-row items-center justify-evenly space-x-3">
                          <label className="col-span-4" htmlFor="Salutation">
                            Name:
                          </label>{" "}
                          <Salutation />
                          <input
                            type="text"
                            autocomplete="off"
                            data-test-id="enterName"
                            placeholder="Enter Name"
														className="relative w-1/3 py-1 px-8 border border-1 border-grey-800 rounded-md shadow-xs text-sm"
                          />
                          <div className="el-scrollbar__bar is-horizontal">
                            <div className="el-scrollbar__thumb"></div>
                          </div>
                          <div className="el-scrollbar__bar is-vertical">
                            <div className="el-scrollbar__thumb"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group space-y-2">
                <label className="lg:col-3 control-label text-xs">Email:</label>{" "}
                <div className="lg:col-9">
                  <div className="el-form-item is-required">
                    <div className="el-form-item__content">
                      <div
                        className="el-tooltip item el-input el-input--prefix"
                        aria-describedby="el-tooltip-1732"
                        tabindex="0"
                      >
                        <input
                          type="text"
                          autocomplete="off"
                          placeholder="Enter Email"
                          data-test-id="enterEmail"
													className="relative w-1/3 py-1 px-8 border border-1 border-grey-800 rounded-md shadow-xs text-sm"
                        />
                        <span className="el-input__prefix px-1">
                          <i className="fa fa-envelope-open relative"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="form-group space-y-2">
                <label className="lg:col-3 control-label text-xs">Contact:</label>{" "}
                <div className="lg:col-3">
                  <div className="el-form-item">
                    <div className="el-form-item__content">
                      <div className="el-input el-input--prefix">
                        <input
                          type="text"
                          autocomplete="off"
                          placeholder="Enter Mobile Number"
													className="relative w-1/3 py-1 px-8 border border-1 border-grey-800 rounded-md shadow-xs text-sm"
                        />
                        <span className="el-input__prefix px-1">
                          <i className="fa fa-mobile"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <label className="lg:col-3 control-label text-xs">Phone:</label>{" "}
                <div className="col-lg-5">
                  <div className="el-form-item">
                    <div className="el-form-item__content">
                      <div className="el-input el-input--prefix">
                        <input
                          type="text"
                          autocomplete="off"
                          placeholder="Enter Phone Number"
													className="relative w-1/3 py-2 px-8 border border-1 border-grey-800 rounded-md shadow-xs text-sm"
                        />
                        <span className="el-input__prefix px-1">
                          <i className="fa fa-phone"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="form-group space-y-2">
                <label className="lg:col-3 control-label text-xs"></label>{" "}
                <div className="lg:col-3">
                  <div className="el-form-item">
                    <div className="el-form-item__content">
                      <div role="radiogroup" className="el-radio-group">
                        <label
                          role="radio"
                          aria-checked="true"
                          tabindex="0"
                          className="el-radio-button el-radio-button--medium is-active"
                        >
                          <input
                            type="radio"
                            tabindex="-1"
                            className="el-radio-button__orig-radio"
                            value="Carer"
                          />
                          <span className="el-radio-button__inner text-xs">Carer</span>
                        </label>{" "}
                        <label
                          tabindex="-1"
                          className="el-radio-button el-radio-button--medium"
                          data-test-id="officeUserLabel"
                        >
                          <input
                            type="radio"
                            tabindex="-1"
                            className="el-radio-button__orig-radio"
                            value="Office User"
                          />
                          <span className="el-radio-button__inner text-xs">
                            Office User
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>{" "}
              <div className="form-group space-y-2">
                <label className="lg:col-3 control-label text-xs">Gender:</label>{" "}
                <div className="col-lg-2">
                  <div className="sm:col-6 md:col-6">
                    <div className="flex flex-row">
                      <div className="xs:col-12">
                        <div className="form-horizontal flex flex-row items-center justify-evenly space-x-3">
                        
                          <Gender />
                        </div>
                        <div className="el-scrollbar__bar is-horizontal">
                          <div className="el-scrollbar__thumb"></div>
                        </div>
                        <div className="el-scrollbar__bar is-vertical">
                          <div className="el-scrollbar__thumb"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <label className="lg:col-1/3 control-label">Date Of Birth:</label>{" "}
              <div className="col-lg-5">
                <div className="el-date-editor el-input el-input--prefix el-input--suffix el-date-editor--date">
                  <input
                    type="text"
                    autocomplete="off"
                    name=""
                    placeholder="Pick a date"
										className="relative w-1/3 py-1 px-8 border border-1 border-grey-800 rounded-md shadow-xs text-sm"
                  />
                  <span className="el-input__prefix px-1">
                    <i className="el-input__icon el-icon-date"></i>
                  </span>
                  <span className="el-input__suffix">
                    <span className="el-input__suffix-inner">
                      <i className="el-input__icon"></i>
                    </span>
                  </span>
                </div>
              </div>
              <div className="form-group space-y-2">
                <label className="lg:col-3 control-label text-xs">
                  Employment Type:
                </label>{" "}
                <div className="lg:col-9">
                  <div className="el-form-item">
                    <div className="el-form-item__content">
                      <div className="el-select full-width">
                        <select>
                          <input
                            type="text"
                            readonly="readonly"
                            autocomplete="off"
                            placeholder="Select"
														className="relative w-1/3 py-1 px-8 border border-1 border-grey-800 rounded-md shadow-xs text-sm"
                          />
                          <span className="el-input__suffix">
                            <span className="el-input__suffix-inner">
                              <i className="el-select__caret el-input__icon el-icon-arrow-up"></i>
                            </span>
                          </span>
                        </select>
                        <div className="el-select-dropdown el-popper">
                          <div className="el-scrollbar">
                            <div className="el-select-dropdown__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default">
                              <select className="el-scrollbar__view el-select-dropdown__list">
                                <option>
                                  <span>Employee</span>
                                </option>

                                <option>
                                  <span>Contractor</span>
                                </option>
                              </select>
                            </div>
                            <div className="el-scrollbar__bar is-horizontal">
                              <div className="el-scrollbar__thumb"></div>
                            </div>
                            <div className="el-scrollbar__bar is-vertical">
                              <div className="el-scrollbar__thumb"></div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="form-group space-y-2">
                <label className="lg:col-3 control-label text-xs">Address:</label>{" "}
                <div className="lg:col-9">
                  <div className="el-form-item">
                    <div className="el-form-item__content">
                      <div className="auto-com el-input el-input--prefix">
                        <input
                          type="text"
                          autocomplete="off"
                          placeholder="Enter Address"
													className="relative w-1/3 py-1 px-8 border border-1 border-grey-800 rounded-md shadow-xs text-sm"
                        />
                        <span className="el-input__prefix px-1">
                          <i className="el-input__icon el-icon-location"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </form>
          </div>
          <div className="box-footer">
            <button
              type="button"
              className="el-button pull-right el-button--primary el-button--small"
              data-test-id="updateStaffSetting"
            >
              <span>Create</span>
            </button>{" "}
            <button
              type="button"
              className="el-button pull-right el-button--default el-button--small"
            >
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewStaff;
