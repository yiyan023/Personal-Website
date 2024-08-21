import React from 'react'

const VideoProcess = () => {
  return (
	<div>
		<pre>
		<code lang="javascript">
			{"import { Muxer, ArrayBufferTarget } from \"./node_modules/mp4-muxer/build/mp4-muxer.mjs\";\n\n" +
			"let canvas = document.getElementById('myCanvas');\n" +
			"const ctx = canvas.getContext('2d');\n" +
			"let frameCounter = 0;\n" +
			"let intervalID = 0;\n\n" +
			"let muxer = new Muxer({\n" +
			"  target: new ArrayBufferTarget(),\n" +
			"  video: {\n" +
			"    codec: 'avc',\n" +
			"    width: canvas.width,\n" +
			"    height: canvas.height\n" +
			"  },\n\n" +
			"  fastStart: 'in-memory',\n" +
			"  firstTimestampBehavior: 'offset'\n" +
			"})\n\n" +
			"const init = {\n" +
			"  output: (chunk, meta) => muxer.addVideoChunk(chunk, meta),\n" +
			"  error: (e) => {\n" +
			"    console.log(e.message)\n" +
			"  }\n" +
			"}\n\n" +
			"const config = {\n" +
			"  codec: \"avc1.42E01E\", // compress / decompress data\n" +
			"  width: canvas.width,\n" +
			"  height: canvas.height,\n" +
			"  bitrate: 1000000, // number of bits processed per sec\n" +
			"  framerate: 25, // fps\n" +
			"}\n\n" +
			"const encoder = new VideoEncoder(init);\n" +
			"encoder.configure(config);\n\n" +
			"function startDrawing() {\n" +
			"  function animate(elapsed) {\n" +
			"    encodeFrames();\n\n" +
			"    //add animation code here!\n\n" +
			"    if (elapsed < 10) {\n" +
			"      animate(elapsed + 30/1000)\n" +
			"    } else {\n" +
			"      decodeAndRender();\n" +
			"    }\n" +
			"  }\n\n" +
			"  function startAnimation() {\n" +
			"    animate(0);\n" +
			"  }\n\n" +
			"  startAnimation();\n" +
			"}\n\n" +
			"const encodeFrames = () => {\n" +
			"  let frame = new VideoFrame(canvas, {\n" +
			"    timestamp: frameCounter * 1000000 / 30,\n" +
			"    duration: 1000000 / 30\n" +
			"  })\n\n" +
			"  frameCounter += 1;\n" +
			"  const keyFrame = frameCounter % 150 == 0;\n" +
			"  encoder.encode(frame, { keyFrame });\n" +
			"  frame.close();\n" +
			"}\n\n" +
			"async function decodeAndRender() {\n" +
			"  await encoder.flush(); // video data has been processed\n" +
			"  muxer.finalize();\n\n" +
			"  let buffer = muxer.target.buffer;\n" +
			"  let blob = new Blob([buffer])\n\n" +
			"  let url = window.URL.createObjectURL(blob)\n" +
			"  let video = document.createElement('video')\n" +
			"  video.src = url\n" +
			"  video.controls = true;\n" +
			"  document.body.appendChild(video)\n" +
			"}\n\n" +
			"window.addEventListener('DOMContentLoaded', () => {\n" +
			"  startDrawing();\n" +
			"});"}
		</code>
    </pre>
	</div>
  )
}

export default VideoProcess