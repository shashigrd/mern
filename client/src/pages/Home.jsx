import { useAuth } from "../common/AuthProvider";

export const Home = () => {
  const { userData } = useAuth();
  return <h1>Welcome {userData.username}</h1>;
};
