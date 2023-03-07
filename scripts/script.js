/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Meta Spark Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// Meta Spark Studio extension for VS Code - https://fb.me/spark-vscode-plugin
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require("Scene");
const Time = require("Time");

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require("Diagnostics");

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

(async function () {
  const face = await Scene.root.findFirst("faceMesh0");
  const blendShapes = await face.getBlendShapes();
  const changeFace = (value) => {
    if (value <= 1) {
      blendShapes[0].weight = value;
    } else if (value > 1 && value <= 2) {
      blendShapes[0].weight = 2 - value;
    } else if (value > 2 && value <= 3) {
      blendShapes[1].weight = value - 2;
    } else if (value > 3 && value <= 4) {
      blendShapes[1].weight = 4 - value;
    } else if (value > 4 && value <= 5) {
      blendShapes[2].weight = value - 4;
    } else if (value > 5 && value <= 6) {
      blendShapes[2].weight = 6 - value;
    } else if (value > 6 && value <= 7) {
      blendShapes[3].weight = value - 6;
    } else if (value > 7 && value <= 8) {
      blendShapes[3].weight = 8 - value;
    } else if (value > 8 && value <= 9) {
      blendShapes[4].weight = value - 8;
    } else if (value > 9 && value <= 10) {
      blendShapes[4].weight = 10 - value;
    } else if (value > 10 && value <= 11) {
      blendShapes[5].weight = value - 10;
    } else if (value > 11 && value <= 12) {
      blendShapes[5].weight = 12 - value;
    }
  };
  let value = 0;
  const intervalTimer = Time.setInterval(() => {
    value = (value + 0.1) % 12;
    value = Math.round(value * 10) / 10;
    changeFace(value);
  }, 50);
})(); // Enables async/await in JS [part 2]
