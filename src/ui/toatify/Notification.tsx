import React from "react";

const Notification = ({ message }: any) => {
  const notify = () => toast(message);
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Notification;
