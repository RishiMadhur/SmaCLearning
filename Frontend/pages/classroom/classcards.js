import React from "react";
import Image from "next/image";
import { JitsiMeeting } from "@jitsi/react-sdk";

const Classcard = () => {
  const data = [
    {
      id: 1,
      Subject: "Data structures",
      faculty: "Sreerammurthy",
      time: "10.00Am-11:00Am",
    },
  ];
  
  const jitsiMeet = () => {
    return (
      <JitsiMeeting
        domain="meet.jit.si"
        roomName="PleaseUseAGoodRoomName"
        configOverwrite={{
          startWithAudioMuted: true,
          disableModeratorIndicator: true,
          startScreenSharing: true,
          enableEmailInStats: false,
        }}
        interfaceConfigOverwrite={{
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        }}
        userInfo={{
          displayName: "YOUR_USERNAME",
        }}
        onApiReady={(externalApi) => {
          // here you can attach custom event listeners to the Jitsi Meet External API
          // you can also store it locally to execute commands
        }}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "400px";
        }}
      />
      );
    };
    console.log(jitsiMeet);
  return (
    <div
      className="bg-white shadow-1 pl-14 pt-12 rounded-xl p-5 md:h-96 md:w-160"
      onClick={jitsiMeet}
    >
      {data.map((value) => (
        <div key={value.id}>
          <Image
            src="/icons/class.svg"
            width="20px"
            height="20px"
            alt="class"
          />
          <h1 className="pt-2 text-text text-sm">{value.Subject}</h1>
          <p className="text-text text-10">{value.faculty}</p>
          <p className="text-11 text-text pt-2">{value.time}</p>
        </div>
      ))}
    </div>
  );
};

export default Classcard;
