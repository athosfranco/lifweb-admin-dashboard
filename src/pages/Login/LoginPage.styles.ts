import styled from "@emotion/styled";

export const LoginPageContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f7f7f7;

  img {
    margin-bottom: 1rem;
    width: 8rem;
  }

  .login-btn {
    margin-top: 2rem;
    padding: 0.5rem;
  }

  .login-card {
    animation: slide-down 1000ms ease-out forwards;
    @keyframes slide-down {
      from {
        opacity: 0;
        transform: translateY(-5rem);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .error-msg {
    font-size: 14px;
    color: tomato;
  }

  .footer {
    position: fixed;
    bottom: 0;
  }
`;
