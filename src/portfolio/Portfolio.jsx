import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://i.pinimg.com/564x/46/74/66/467466e03ec595b95875db70c4e41d6b.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto voluptatum fugiat, quas temporibus quaerat perferendis harum doloribus ad placeat eius ex earum iste aliquid sequi. Aliquam, totam. Et, alias?",
  },
  {
    id: 2,
    title: "Travelling Website",
    img: "https://i.pinimg.com/originals/95/de/97/95de9788940fd14d81478f61f761e4f2.gif",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto voluptatum fugiat, quas temporibus quaerat perferendis harum doloribus ad placeat eius ex earum iste aliquid sequi. Aliquam, totam. Et, alias?",
  },
  {
    id: 3,
    title: "Shopping Website",
    img: "https://i.pinimg.com/564x/db/4b/b4/db4bb46e24b70b558fa01f2eb5d1844a.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto voluptatum fugiat, quas temporibus quaerat perferendis harum doloribus ad placeat eius ex earum iste aliquid sequi. Aliquam, totam. Et, alias?",
  },
  {
    id: 4,
    title: "Dashboard",
    img: "https://i.pinimg.com/564x/82/22/52/82225292dee6572070b5064c3bf0e550.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto voluptatum fugiat, quas temporibus quaerat perferendis harum doloribus ad placeat eius ex earum iste aliquid sequi. Aliquam, totam. Et, alias?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [0, 2], // Adjust the offset according to your layout
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]); // Adjust the range according to your layout

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
