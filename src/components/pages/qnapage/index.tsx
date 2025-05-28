import React from "react";

import FBicon from "../../../../public/fb-icon.jpeg";

const QNApageScreen: React.FC = () => {
  // function here
  // ....
  return (
    <div>
      <h2 className="p-10 text-red-600 text-3xl">
        how to import tailwind to react component
      </h2>

      <ol className="p-10">
        <li>copy code html nya</li>
        <li>paste di file react component</li>
        <li>ganti class menjadi className</li>
      </ol>
      <br />
      <br />
      <br />
      <h1>image in react</h1>
      <img src={FBicon} className="w-1/2" alt="" />
      <img src="./images/fb-icon.jpeg" alt="" />
    </div>
  );
};

export default QNApageScreen;
