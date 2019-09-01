import { Universe, Species } from "../crate/pkg";

import { startWebGL } from "./render";
import { fps } from "./fps";
import {} from "./paint";
import {} from "./app";
import {} from "./setup";
import { startSky } from "./shaderToy";

let n = 200;
let h = n / 2;
let d = n - 6;

const universe = Universe.new(n, n);
universe.paint(h, h, d + 2, Species.Glass);

universe.paint(h - 30, d - 3, 20, Species.Wood);
universe.paint(h + 30, d - 3, 20, Species.Wood);
universe.paint(h, h, d - 2, Species.Air);
for (var x = 30; x < d - 30; x += 10) {
  universe.paint(x, h * 1.2, h, Species.Water);
}

for (var x = 0; x < d; x += 10) {
  universe.paint(x, d * 0.75, 20, Species.Sand);
}
universe.paint(h, h, h * 1.1, Species.Water);

universe.paint(h, h, 2, Species.Zoop);
universe.paint(h + 20, h, 2, Species.Fish);
universe.paint(h, h * 1.2, 2, Species.Bacteria);
universe.paint(h * 1.5, h * 1.2, 2, Species.Seed);

universe.paint(h, h, 10, Species.Algae);

// universe.paint(150, 50, 25, Species.Seed);
let ratio = 2;
let width = n;
let height = n;
const canvas = document.getElementById("sand-canvas");

canvas.height = n * ratio * Math.ceil(window.devicePixelRatio);
canvas.width = n * ratio * Math.ceil(window.devicePixelRatio);

const ui = document.getElementById("ui");
let canvasSize;
let resize = () => {
  let screen_width = window.innerWidth;
  let uiheight = 50;
  let screen_height = window.innerHeight - uiheight;

  let canvasStyle = "";
  let uiStyle = "";
  if (screen_width > screen_height) {
    if (screen_width - window.innerHeight < 400) {
      // landscape compressed
      canvasStyle = `height: ${window.innerHeight}px; margin:3px`;
      canvasSize = window.innerHeight;
      uiStyle = `width: ${screen_width -
        window.innerHeight -
        12}px; margin: 2px;`;
    } else {
      // landscape wide
      canvasStyle = `height: ${window.innerHeight}px`;
      canvasSize = window.innerHeight;

      uiStyle = `width: ${(screen_width - window.innerHeight) / 2 -
        7}px; margin: 2px;`;
    }
  } else {
    //portrait (mobile)
    canvasSize = screen_width;

    canvasStyle = `width: ${screen_width}px; `;
    uiStyle = "";
  }
  ui.style = uiStyle;
  canvas.style = canvasStyle;
};

resize();
window.addEventListener("deviceorientation", resize, true);
window.addEventListener("resize", resize);

let drawSand = startWebGL({ canvas, universe });
let sky_ratio = canvasSize / n;
let sky = startSky(sky_ratio * 2);

let t = 0;
const renderLoop = () => {
  if (!window.paused) {
    fps.render(); // new
    universe.tick();
    t += 0.1;
  }
  // t++;
  // if (t > 10) {
  // t = 0;
  universe.set_time(t % 255);
  // }
  drawSand();
  // if (t % 1 == 0) {
  sky.frame(t / 255);
  // }

  window.animWebationId = requestAnimationFrame(renderLoop);
};
255;
function reset() {
  universe.reset();
}
window.u = universe;
window.universe = universe;
renderLoop();

export { canvas, width, height, ratio, universe, reset };
