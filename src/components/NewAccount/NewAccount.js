import AccountForm from "./AccountForm";
import "../informationBox/AccountWrapper.css";

function NewAccount(props) {
  const saveHandleAccountData = (enteredAccountData) => {
    const accountData = {
      ...enteredAccountData,
      id: Math.random().toString(),
    };
    console.log(accountData);

    props.onAddAccount(accountData);
  };

  return (
    <div>
      <AccountForm onSaveAccountData={saveHandleAccountData} />
    </div>
  );
}

export default NewAccount;
