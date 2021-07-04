import "./AccountWrapper.css";

function AccountItemList(props) {
  console.log(props.note);
  return (
    <li className="ca">
      <span className="plus hidden pl ">+</span>
      <span className="plus hidden ac">Add Account</span>

      <div className={props.note ? "note" : "hidden"}>{props.note}</div>

      <div className="title">{props.title}</div>

      <div className="balance ">
        <span className="amount">{props.balance.amount}</span>
        <span className="currency">{props.balance.currency}</span>

        <span className={props.amount ? "amount" : "hidden"}>
          {props.amount}
        </span>

        <span className={props.currency ? "currency" : "hidden"}>
          {props.currency}
        </span>
      </div>
    </li>
  );
}

export default AccountItemList;
