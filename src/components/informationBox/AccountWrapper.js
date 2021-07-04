import React, { useState } from "react";

import AccountItem from "./AccountItem";
import Header from "../header/Header";
import NewAccount from "../NewAccount/NewAccount";

import "./AccountWrapper.css";

const INITIAL_ACCOUNTS = [
  {
    title: "..",
    balance: { amount: 570, currency: "EURO" },
  },
  {
    title: "My Business Account",
    balance: { amount: 500, currency: "EURO" },
    amount: 200,
    currency: "$",
  },
  {
    title: "Personal Safe",
    balance: { amount: 100, currency: "£" },
    amount: "0",
    currency: "YEN",
  },

  {
    title: "Discretionary funds",
    balance: { amount: 300, currency: "YEN" },
    note: "3",
  },
];

function AccountWrapper() {
  const [accounts, setAccount] = useState(INITIAL_ACCOUNTS);

  const addAccountHandler = (account) => {
    setAccount((prevAccounts) => {
      console.log(account);
      return [account, ...prevAccounts];
    });
  };

  // ===============================================
  return (
    <div className="wrap">
      <div className="account_wrapper">
        <div className="clr_btn">
          <div className="one btn"></div>
          <div className="two btn"></div>
          <div className="three btn"></div>
        </div>
        <Header />

        {console.log(accounts)}
        <AccountItem items={accounts} />
      </div>
    </div>
  );
}

export default AccountWrapper;
