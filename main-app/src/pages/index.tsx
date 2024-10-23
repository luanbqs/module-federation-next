import React from 'react';
import dynamic from "next/dynamic";

const RemoteHome = dynamic(() => import("remote/Home"), {
  ssr: false,
});

const IndexPage = () => {
  return (
    <React.Suspense fallback="Loading Remote Component...">
      <RemoteHome />
    </React.Suspense>
  );
};
export default IndexPage;
