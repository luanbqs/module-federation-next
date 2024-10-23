import dynamic from "next/dynamic";

const RemoteComponent = dynamic(() => import("remote/ComponentA"), {
  ssr: false,
});

export default RemoteComponent;
