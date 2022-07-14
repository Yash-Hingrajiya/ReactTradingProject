import React from "react";
import MarketWatch from "../Tables/MarketWatch";
import Tabs from "../Tabs/Tabs";

function Dashboard() {
  return (
    <>
      {/* Begin Page Content */}

      <div className="container-fluid">
        {/* Page Heading */}

        {/* <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <a className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i className="fas fa-download fa-sm text-white-50"></i> Generate
            Report
          </a>
        </div> */}

        {/* Content Row */}

        <div className="row">{/* Earnings (Monthly) Card Example */}</div>
      </div>
      <MarketWatch />
      <Tabs />
    </>
  );
}

export default Dashboard;
