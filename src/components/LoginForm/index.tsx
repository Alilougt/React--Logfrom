import "./index.scss";
import { IuserData } from "../../interfaces";
import { formInputList } from "../../Data";

interface Iprops {
  userData: IuserData;
  setUserData: (val: IuserData) => void;
  setIsLoggedIn: (val: boolean) => void;
}

//Login form component

const LoginForm = ({ setIsLoggedIn, setUserData, userData }: Iprops) => {
  // onChangeHandler is a function that will be called when the user types in the input fields
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  //  ** Render

  const renderFormInputList = formInputList.map((input) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
        key={input.id}
      >
        <div className="input-wrapper">
          <label htmlFor={input.id}>{input.label}</label>
          <input
            type={input.type}
            name={input.name}
            id={input.id}
            value={userData[input.name]}
            onChange={onChangeHandler}
            placeholder={input.placeholder}
          />
        </div>
        <button>❌</button>
      </div>
    );
  });
  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <div style={{ width: "100%" }}>{renderFormInputList}</div>
      <button
        type="submit"
        onClick={() => {
          setIsLoggedIn(true);
        }}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
