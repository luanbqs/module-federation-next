
import React from "react";
import dynamic from "next/dynamic";
const RemoteNext = dynamic(() => import('remoteNext/RemoteNext'), {
  ssr: false,
});


const Module1 = dynamic(() => import('remoteVite/Module1'), { ssr: false })


const IndexPage = () => {
  return (
    <>
      <h1>Host</h1>
      <React.Suspense fallback="Loading Remote Component...">
        <RemoteNext />
        <Module1 />
      </React.Suspense>
    </>
  );
};
export default IndexPage;
