import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";
import { login } from "../services/apiAuth";

const FullPage = styled.div`
  height: 100vh;
  background: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. load the authenticated user.
  const { isLoadingUser, user, isAuthenticated } = useUser();

  //3.if no authenticated user redirect to login page
  useEffect(() => {
    if (!isAuthenticated && !isLoadingUser) navigate("login");
  }, [isAuthenticated, isLoadingUser, navigate]);

  //2. while loading show spinner
  if (isLoadingUser)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  //4. if there is a user then render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
