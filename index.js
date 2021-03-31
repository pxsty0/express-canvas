const express = require("express");
const app = express();
const Canvas = require('canvas');
const { createCanvas, loadImage } = require('canvas')
const { registerFont } = require('canvas');

app.get("/textapi/", async (req, res) => {
    var text = req.query.yazi;

    const width = 700;
    const height = 200;
    
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')
     registerFont('./fontdosyanız.ttf', { family: 'open-sans' });
 const background = await Canvas.loadImage('text.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';
      ctx.font = '50px open-sans';
    ctx.fillText(text, canvas.width / 15.0, canvas.height / 1.9);
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    
    const buffer = canvas.toBuffer('image/png')
      res.header('Access-Control-Allow-Origin', '*');
      res.writeHead(200, {'Content-Type': 'image/png' });
      res.end(buffer, 'binary');
    });
    const port = 8080;

    app.listen(port, () => console.log(`Port: ${port}`));
