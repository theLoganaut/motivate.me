import {
  Authenticator,
  ThemeProvider,
  Theme,
  useTheme,
} from "@aws-amplify/ui-react";
import { Container } from "react-bootstrap";
import "@aws-amplify/ui-react/styles.css";
import Home from "./Home";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { tokens } = useTheme();
  const theme = {
    name: "Auth Example Theme",
    tokens: {
      colors: {
        background: {
          primary: {
            value: tokens.colors.neutral["40"].value,
          },
          secondary: {
            value: tokens.colors.neutral["80"].value,
          },
        },
        font: {
          interactive: {
            value: tokens.colors.white.value,
          },
        },
        brand: {
          primary: {
            10: tokens.colors.red["100"],
            80: tokens.colors.red["40"],
            90: tokens.colors.red["20"],
            100: tokens.colors.red["10"],
          },
        },
      },
      components: {
        tabs: {
          item: {
            _focus: {
              color: {
                value: tokens.colors.white.value,
              },
            },
            _hover: {
              color: {
                value: tokens.colors.yellow["80"].value,
              },
            },
            _active: {
              color: {
                value: tokens.colors.white.value,
              },
            },
          },
        },
      },
    },
  };

  return (
    <Container>
      <div style={{ marginTop: "20%" }}>
        <ThemeProvider theme={theme}>
          <Authenticator>
            <Navigate to="/Home" />
          </Authenticator>
        </ThemeProvider>
      </div>
    </Container>
  );
};

export default Login;
