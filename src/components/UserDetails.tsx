import { IuserData } from "../interfaces";

interface IUserDetailsProps {
  userData: IuserData;
}
const UserDetails = ({ userData }: IUserDetailsProps) => {
  return (
    <div>
      <h2>User Details</h2>
      <h3>Username: {userData.username}</h3>
      <h3>Password: {userData.phone}</h3>
      <h3>Password: {userData.password}</h3>
    </div>
  );
};

export default UserDetails;
