// import React from "react";
const CV = () => {
  return (
    <div
      // style={{ background: "#cdd5f4" }}
      //relative flex flex-col items-center justify-center min-h-screen text-black overflow-hidden
      className="relative flex flex-col items-center justify-center  text-black overflow-hidden border-2 border-black p-4 bg-amber-50"
    >
      {/* relative max-w-4xl w-full text-left border-2 border-black p-4 bg-amber-50" */}
      <div className="md:max-w-4xl relative w-full  text-left ">
        {/* md:max-w-4xl */}
        <div className=" items-center justify-center">
          {/* <h1 className="text-4xl md:text-6xl font-bold border-b-4 border-black pb-2"> */}
          {/*   Emre Kerman */}
          {/* </h1> */}
          <p className="text-lg md:text-xl mt-2 mix-blend-normal text-black">
            emrekerman02@gmail.com |{" "}
            <a href="https://github.com/dehidr" className="underline">
              GitHub
            </a>{" "}
            |{" "}
            <a href="#" className="underline">
              LinkedIn
            </a>
          </p>
          <h2 className="text-xl md:text-2xl font-bold mt-6 border-b-2 border-black">
            Summary
          </h2>
          <p>
            Computer Engineering student from Izmir, currently studying at Dokuz
            Eylül University. Passionate about Linux, open-source software, and
            development.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-6 border-b-2 border-black">
            Technical Skills
          </h2>
          <p>
            <strong>Languages:</strong> Go, Rust, Java, Kotlin, C#, Lua, C
          </p>
          <p>
            <strong>OS & Tools:</strong> Docker, Linux, Bash
          </p>
          <p>
            <strong>Machine Learning:</strong> Python, TensorFlow, Keras, NumPy
          </p>
          <p>
            <strong>Web:</strong> HTML, CSS, JavaScript
          </p>
          <p>
            <strong>Database:</strong> PostgreSQL, SQL, NoSQL
          </p>
          <p>
            <strong>Adobe:</strong> Photoshop, After Effects, Illustrator,
            Premiere Pro
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-6 border-b-2 border-black">
            Education
          </h2>
          <p>
            <strong>Izmir Yunus Emre Anadolu Lisesi</strong> (2018 - 2021)
          </p>
          <p>
            <strong>BSc in Computer Engineering, Dokuz Eylül University</strong>{" "}
            (2021 - 2025)
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-6 border-b-2 border-black">
            Projects
          </h2>
          <p>
            <strong>Early Frost Detection Using AI & Sensors</strong> (Go,
            Python, TensorFlow, ESP-32)
          </p>
          <ul className="list-disc ml-6">
            <li>
              Developed web server & front-end in Go for real-time monitoring
            </li>
            <li>Built a refrigerator prototype for accurate modeling</li>
            <li>Collected data via ESP-32 & DHT-22 sensors over WiFi</li>
            <li>Preprocessed data & trained ML model</li>
          </ul>

          <p>
            <strong>Hand Gesture Detection with Computer Vision</strong>{" "}
            (Python, TensorFlow, NumPy)
          </p>
          <ul className="list-disc ml-6">
            <li>Created dataset & trained CNN and ResNet-like model</li>
            <li>Implemented webcam support for real-time classification</li>
          </ul>

          <p>
            <strong>Game Platform & Storefront</strong> (C#, .NET Core,
            PostgreSQL)
          </p>
          <ul className="list-disc ml-6">
            <li>Designed database architecture</li>
            <li>Developed backend & automation tools</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CV;
