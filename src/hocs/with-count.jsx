import React, { useCallback, useState } from "react";

// export function withCount(WrappedComponent) {
//   class WithCount extends React.Component {
//     render() {
//       //....
//       return <WrappedComponent />;
//     }
//   }
//
//   WithCount.display = `WithCount${
//     WrappedComponent.displayName || WrappedComponent.name || ""
//   }`;
//
//   return WithCount;
// }

// export function withAuthoized(WrappedComponent) {
//   const WithCount = (props) => {
//     // check authorized
//
//     if (!isAuthorized) {
//       return null;
//     }
//
//     return <WrappedComponent {...props} />;
//   };
//
//   WithCount.display = `WithAuthorized${
//     WrappedComponent.displayName || WrappedComponent.name || ""
//   }`;
//
//   return WithCount;
// }

export function withCount(WrappedComponent) {
  const WithCount = (props) => {
    const [count, setCount] = useState(0);

    const decrement = useCallback(
      () => setCount((currentCount) => currentCount - 1),
      []
    );

    const increment = useCallback(() => {
      setCount((currentCount) => currentCount + 1);
    }, []);

    return (
      <WrappedComponent
        {...props}
        count={count}
        decrement={decrement}
        increment={increment}
      />
    );
  };

  WithCount.display = `WithCount${
    WrappedComponent.displayName || WrappedComponent.name || ""
  }`;

  return WithCount;
}
