import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [active, setActive] = useState(false);
  const listItem = { hidden: { x: -100, opacity: 0.5 } };
  const list = { hidden: { opacity: 0.5 } };
  const [x1, setX] = useState(0);
  const [y2, setY] = useState(0);
  const [rotate1, setRotate] = useState(0);

  return (
    <div>
      <div className="app">
        <motion.ul animate="hidden" variants={list}>
          <motion.li className="tobe" variants={listItem}></motion.li>
        </motion.ul>
      </div>
      <div className="app2">
        <motion.ul>
          <motion.li
            animate="hidden"
            whileInView={{ x: 100 }}
            transition={{ duration: 1 }}
            initial={{ x: 300 }}
            className="tobe"
          ></motion.li>
          <motion.li
            animate="hidden"
            whileInView={{ x: -100 }}
            transition={{ duration: 1 }}
            initial={{ x: -300 }}
            className="tobe"
          ></motion.li>{" "}
          <motion.li
            animate="hidden"
            whileInView={{ x: 100 }}
            transition={{ duration: 1 }}
            initial={{ x: 300 }}
            className="tobe"
          ></motion.li>
          <motion.li
            animate="hidden"
            whileInView={{ x: -100 }}
            transition={{ duration: 1 }}
            initial={{ x: -300 }}
            className="tobe"
          ></motion.li>{" "}
          <motion.li
            animate="hidden"
            whileInView={{ x: 100 }}
            transition={{ duration: 1 }}
            initial={{ x: 300 }}
            className="tobe"
          ></motion.li>
          <motion.li
            animate="hidden"
            whileInView={{ x: -100 }}
            transition={{ duration: 1 }}
            initial={{ x: -300 }}
            className="tobe"
          ></motion.li>
          <motion.div className="tobe" initial={false} animate={{ x: 100 }} />
        </motion.ul>
      </div>


      <div className="app">
        <div className="ap1">
        <motion.div
          className="boxyyyy"
          animate={{ x1, y2, rotate1 }}
          transition={{ type: "spring" }}
        >x: {x1} y:{y2} rotate:{rotate1}</motion.div>
        </div>
        <div className="ap2">
          <input type="range" value={x1} onChange={(e)=>setX(parseFloat(e.target.value))} />
          {x1}
          <input type="range" value={y2} onChange={(e)=>setY(parseFloat(e.target.value))} />
          {y2}
          <input type="range" value={rotate1} onChange={(e)=>setRotate(parseFloat(e.target.value))} />
          {rotate1}
        </div>
      </div>
    </div>
  );
}

export default App;
