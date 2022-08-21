import { v4 as uuid } from 'uuid';
import useWindowSize from '../../hooks/useWindowDimensions';
import { motion } from 'framer-motion';
import { MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "./Shapes";
import useMeasure from "react-use-measure";

import { transition } from "./settings";
import { Suspense, useState } from "react";


export const LandingPageBackground = ({ ...props }) => {
  const { height, width } = useWindowSize();
  const changeSizeBasedOnWindowSize = (ls) =>
    width < 768 ? ls[0] : width < 1024 ? ls[1] : ls[2];

    const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  return (
    <div {...props}>
      <MotionConfig transition={transition}>
      <motion.button
        ref={ref}
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.5 },
          press: { scale: 1.4 }
        }}
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          mouseY.set(e.clientY - bounds.y - bounds.height / 2);
        }}
      >
        <motion.div
          className="shapes"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 }
          }}
        >
          <div className="pink blush" />
          <div className="blue blush" />
          <div className="container">
            <Suspense fallback={null}>
              <Shapes
                isHover={isHover}
                isPress={isPress}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </Suspense>
          </div>
        </motion.div>
        <motion.div
          variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
          className="label"
        >
          play
        </motion.div>
      </motion.button>
    </MotionConfig>
      {/* <GlassPolygon
        type="circle"
        opacity="0.45" 
        length={changeSizeBasedOnWindowSize(['150', '200', '250'])}
        color="#FFD5E3 0%, #B485D2 100%"
        rotateGradient="176"
        className="polygon-general top-24 md:top-48 lg:top-1/2 left-[51px] "
      />
      <GlassPolygon
      type="circle"
      opacity="0.37"
      length="250"
      color="#CB3D6C 0%, #D4AF56 65%, #B485D2 100%"
      rotateGradient="176"
      className="polygon-general top-[260px] md:top-[260px] lg:top-[191px] left-[51px] md:left-[51px] lg:left-[569px]"
    />
    <GlassPolygon
      type="circle"
      opacity="0.37"
      length="412"
      color="#E6D65A 0%, #B485D2 100%"
      rotateGradient="176"
      className="polygon-general top-[260px] md:top-[260px] lg:top-[435px] left-[51px] md:left-[51px] lg:left-[472px]"
    />
    <GlassPolygon
      type="polygon"
      opacity="0.45"
      rotateGradient="45"
      color="#ffff00 0%, #000000 100%"
    />
    <GlassPolygon
      type="polygon"
      side="6"
      opacity="0.45"
      rotateGradient="90"
      color=" #ec5d5d 0%, #35944ec9 40%, #bcd223a6 100%"
    /> */}
    </div>
  );
};
const GlassPolygon = ({
  type,
  length = '100',
  side = '4',
  borderRadius = '10',
  padding = '0',
  color = '#ec5d5d 0%, #35944ec9 40%, #bcd223a6 100%',
  rotateGradient = '90',
  opacity = '80%',
  ...args
}) => {
  const unique_id = uuid();
  let polygon;
  if (type === 'polygon') {
    polygon = roundedPolygon(
      parseInt(side),
      parseInt(length),
      parseInt(borderRadius),
      parseInt(padding)
    );
  }
  let width = type === 'circle' ? length : polygon.width;
  let height = type === 'circle' ? length : polygon.height;
  const spring = {
    type: "spring",
    damping: 20,
    when: "afterChildren"
  };

  return (
    <motion.div
    transition={{type: "keyframes"}}
    initial={{ y: -300 }}
    animate={{ y: 0, }}
    exit={{ y: 300 }}
    >
      <svg
        width={width}
        height={height}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        {...args}
      >
        <defs>
          <linearGradient
            id={`gradient-${unique_id}`}
            gradientTransform={`rotate(${rotateGradient})`}
          >
            {color.split(',').map((str, index) => {
              str = str.trim().split(' ');
              return <stop key={index} offset={str[1]} stopColor={str[0]} />;
            })}
          </linearGradient>
          <filter
            id={`filter-${unique_id}`}
            x="0"
            y="0"
            width={width}
            height={height}
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        {type === 'circle' ? (
          <circle
            cx={length / 2}
            cy={length / 2}
            r={length / 2}
            opacity={opacity}
            fill={`url(#gradient-${unique_id})`}
            filter={`url(#filter-${unique_id})`}
          />
        ) : (
          <path
            d={polygon.path}
            opacity={opacity}
            fill={`url(#gradient-${unique_id})`}
            filter={`url(#filter-${unique_id})`}
          />
        )}
      </svg>
    </motion.div>
  );
};

function roundedPolygon(N, L, R, padding) {
  padding = padding || 0;

  var half = ((N - 2) * Math.PI) / N / 2, // Half angle of corner
    sin = Math.sin(half),
    cos = Math.cos(half),
    gap = L - (2 / Math.tan(half)) * R,
    round = 2 * cos * R,
    D = L / cos, // Diameter cross the polygon
    offsetY = 0;

  // Diameter is different for odd-sided polygon
  if (N % 2) {
    var vertial = D / 2 + (D / 2) * sin;
    D = Math.sqrt(Math.pow(L / 2, 2) + Math.pow(vertial, 2));
    offsetY = (D - vertial) / 2;
  }

  D += 2 * padding;

  function getQuadrant(x) {
    return Math.floor(((x + 2 * Math.PI) % (2 * Math.PI)) / (Math.PI / 2)) + 1;
  }

  var points = [[0, R / sin - R * sin + padding + offsetY]],
    angles = [half - Math.PI / 2],
    horizontalCut = 0;

  for (var i = 1; i <= N; i += 1) {
    var prev = angles[i - 1],
      next = prev + Math.PI - 2 * half,
      middle = (prev + next) / 2;

    var prevQ = getQuadrant(prev),
      nextQ = getQuadrant(next);

    // Rounded corner reduce the horizontal size of image
    if (prevQ === 1 && nextQ >= 2 && nextQ <= 3) {
      horizontalCut = (Math.cos(Math.abs(middle - Math.PI / 2)) * R) / sin - R;
    }

    angles.push(next);
    points.push([Math.cos(middle) * round, Math.sin(middle) * round]);
    if (i !== N) {
      points.push([Math.cos(next) * gap, Math.sin(next) * gap]);
    }
  }

  // Rounded corner reduce the vertical size of image
  var vertialCut = R / sin - R;

  // Just recalculate the cords of start point
  if (N % 2) {
    D -= horizontalCut * 2;
    points[0][1] -= (horizontalCut * 2 + vertialCut) / 2;
  } else {
    D -= vertialCut * 2;
    points[0][1] -= vertialCut;
  }
  points[0][0] = D / 2 - cos * R;

  // Let the width be an integer
  var width = Math.ceil(D),
    delta = (width - D) / 2;
  points[0][0] += delta;
  points[0][1] += delta;

  function fixFloat(value) {
    var fixed = +value.toPrecision(14);
    if (Math.abs(fixed) < 1e-13) {
      fixed = 0;
    }
    return fixed;
  }

  var list = [];
  points.forEach(function (p, index) {
    var x = fixFloat(p[0]),
      y = fixFloat(p[1]);
    if (index === 0) {
      list.push('M' + x + ' ' + y);
    } else if (index % 2) {
      list.push('a' + R + ' ' + R + ' 0 0 1 ' + x + ' ' + y);
    } else {
      list.push('l' + x + ' ' + y);
    }
  });

  var path = list.join('');

  return {
    width: width,
    height: width,
    path: path,
  };
}
