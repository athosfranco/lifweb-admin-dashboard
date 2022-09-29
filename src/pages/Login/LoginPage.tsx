import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import { LoginPageContainer } from "./LoginPage.styles";
import lifwebLogo from "../../assets/lifweblogo.png";
import { Stack } from "@mui/system";
import { getCurrentYear } from "../../generalFunctions";
import { useState } from "react";
import { authenticate } from "./LoginPage.functions";

export const LoginPage = () => {
  const [loginInput, setLoginInput] = useState<string>();
  const [passwordInput, setPasswordInput] = useState<string>();
  const [loginError, setLoginError] = useState<boolean>(false);

  return (
    <LoginPageContainer>
      <Card className="login-card" sx={{ width: "21.875rem" }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "1rem 0",
            }}
          >
            <img src={lifwebLogo} />
            <Typography variant="h6">Admin Dashboard</Typography>
          </Box>
          <Stack spacing={1}>
            <TextField
              error={loginError}
              id="login-input"
              label="Login"
              variant="filled"
              value={loginInput}
              onChange={(e) => setLoginInput(e.target.value)}
            />
            <TextField
              error={loginError}
              type="password"
              id="password-input"
              label="Senha"
              variant="filled"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            {loginError && (
              <Alert severity="error">Login ou senha incorretos.</Alert>
            )}
            <Button
              variant="contained"
              className="login-btn"
              disabled={!loginInput || !passwordInput}
              onClick={() =>
                authenticate(
                  loginInput,
                  passwordInput,
                  setLoginInput,
                  setPasswordInput,
                  setLoginError
                )
              }
            >
              Entrar
            </Button>
          </Stack>
        </CardContent>
      </Card>
      <Typography
        className="footer"
        variant="overline"
        display="block"
        gutterBottom
      >
        Desenvolvido por{" "}
        <Link
          href="https://github.com/athosfranco"
          target="_blank"
          variant="overline"
        >
          Athos Dev
        </Link>{" "}
        - {getCurrentYear()}
      </Typography>
    </LoginPageContainer>
  );
};
