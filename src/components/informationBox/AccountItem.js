import AccountItemList from "./AccountItemList";
import "./AccountWrapper.css";

function AccountItem(props) {
  const items = props;
  console.log(props);

  return (
    <div className="grid_items">
      {props.items.map((account) => (
        <div className="items">
          <AccountItemList
            balance={account.balance}
            amount={account.amount}
            currency={account.currency}
            title={account.title}
            note={account.note}
          />
        </div>
      ))}
    </div>
  );
}

export default AccountItem;
