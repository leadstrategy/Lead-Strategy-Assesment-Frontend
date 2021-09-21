import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface QuizRouteProps {
  component: React.FunctionComponent;
  isAuthenticated: boolean;
  path: string;
  exact: boolean;
}

export function QuizRoute({ component, isAuthenticated, path, exact, ...rest }: QuizRouteProps) {
  return (
    <Route
      {...rest}
      path={path}
      exact={exact}
      render={(props: any) =>
        isAuthenticated ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )
      }
    />
  );
}

// interface

// function AdminRoute({ component, isAuthenticated, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated ? (
//           React.createElement(component, props)
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/admin',
//             }}
//           />
//         )
//       }
//     />
//   );
// }
