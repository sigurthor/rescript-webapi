open Webapi.Canvas
open Webapi.Canvas.Canvas2d
open Webapi.Dom

let canvasEl: Dom.element = document->Document.createElement("canvas")
let ctx: t = canvasEl->CanvasElement.getContext2d

ctx->save
ctx->restore

ctx->scale(~x=1., ~y=2.)
ctx->rotate(2.)
ctx->translate(~x=2., ~y=3.)
ctx->transform(~m11=1., ~m12=2., ~m21=1., ~m22=1., ~dx=1., ~dy=1.)

globalAlpha(ctx, 0.9)
globalCompositeOperation(ctx, Composite.sourceOver)

lineWidth(ctx, 1.)
lineCap(ctx, LineCap.butt)
lineJoin(ctx, LineJoin.round)
miterLimit(ctx, 10.)

setStrokeStyle(ctx, String, "red")
setFillStyle(ctx, String, "red")

switch fillStyle(ctx) {
| (Gradient, g: gradient) => g->addColorStop(0.0, "red")
| (String, s) => Js.log(s)
| (Pattern, _) => ()
}

switch strokeStyle(ctx) {
| (Gradient, g) => g->addColorStop(1.2, "blue")
| (String, s) => Js.log(s)
| (Pattern, _) => ()
}

shadowOffsetX(ctx, 1.)
shadowOffsetY(ctx, 1.)
shadowBlur(ctx, 1.)
shadowColor(ctx, "red")

// common things
ctx->closePath
ctx->moveTo(~x=1., ~y=1.)
ctx->lineTo(~x=1., ~y=2.)
ctx->quadraticCurveTo(~cpx=1., ~cpy=1., ~x=1., ~y=1.)
ctx->bezierCurveTo(~cp1x=1., ~cp1y=1., ~cp2x=2., ~cp2y=2., ~x=4., ~y=4.)
ctx->arc(~x=1., ~y=1., ~r=4., ~startAngle=1., ~endAngle=3., ~counterClockWise=true, ())
ctx->arcTo(~x1=1., ~y1=1., ~x2=2., ~y2=2., ~r=4.)
ctx->ellipse(
  ~x=1.,
  ~y=1.,
  ~rx=4.,
  ~ry=8.,
  ~rtn=4.,
  ~startAngle=1.,
  ~endAngle=3.,
  ~counterClockWise=true,
  (),
)
ctx->rect(~x=0., ~y=0., ~w=10., ~h=10.)
ctx->roundRect(~x=0., ~y=0., ~w=10., ~h=10., ~r=10.)
// end common things

ctx->beginPath
ctx->stroke
ctx->clip
ctx->fill
let pointInPath: bool = ctx->isPointInPath(~x=0., ~y=0.)

// fillPath2d and strokePath2d are in the Path2d module test

let linearGradient: gradient = ctx->createLinearGradient(~x0=0.0, ~y0=0.0, ~x1=0.0, ~y1=0.0)
setStrokeStyle(ctx, Gradient, linearGradient)
let radialGradient: gradient =
  ctx->createRadialGradient(~x0=0.0, ~y0=0.0, ~x1=0.0, ~y1=0.0, ~r0=0.0, ~r1=0.0)
linearGradient->addColorStop(0.0, "red")
let noRepeatPatern: pattern = ctx->createPattern(document->Document.createElement("img"), #noRepeat)
let repeatPatern: pattern = ctx->createPattern(document->Document.createElement("img"), #repeat)
let repeatXPatern: pattern = ctx->createPattern(document->Document.createElement("img"), #repeatX)
let repeatYPatern: pattern = ctx->createPattern(document->Document.createElement("img"), #repeatY)

let measureText: measureText = ctx->measureText("foo")
let width: float = width(measureText)
ctx->fillText("foo!", ~x=0.0, ~y=0.0, ~maxWidth=width, ())
ctx->strokeText("foo!", ~x=0.0, ~y=0.0, ~maxWidth=width, ())

let image: HtmlImageElement.t = HtmlImageElement.makeWithSize(16, 16)
ctx->drawImage(#HtmlImageElement(image), ~dx=0.0, ~dy=0.0)
ctx->drawImageScale(#HtmlImageElement(image), ~dx=0.0, ~dy=0.0, ~dWidth=16.0, ~dHeight=16.0)
ctx->drawImageFull(
  #HtmlImageElement(image),
  ~sx=0.0,
  ~sy=0.0,
  ~sWidth=16.0,
  ~sHeight=16.0,
  ~dx=0.0,
  ~dy=0.0,
  ~dHeight=16.0,
  ~dWidth=16.0,
)

let imageFromCoords: Image.t = createImageDataCoords(ctx, ~width=0.0, ~height=0.0)
let imageFromData: Image.t = createImageDataFromImage(ctx, imageFromCoords)
let w: float = Image.width(imageFromCoords)
let h: float = Image.height(imageFromCoords)

let frameFromImage: Image.t = getImageData(ctx, ~sx=0.0, ~sy=0.0, ~sw=0.0, ~sh=0.0)
putImageData(ctx, ~imageData=imageFromCoords, ~dx=0.0, ~dy=0.0)
putImageDataWithDirtyRect(
  ctx,
  ~imageData=imageFromCoords,
  ~dx=0.0,
  ~dy=0.0,
  ~dirtyX=0.0,
  ~dirtyY=0.0,
  ~dirtyWidth=0.0,
  ~dirtyHeight=0.0,
)

font(ctx, "10px Courier")
textAlign(ctx, "left")
textBaseline(ctx, "top")
ctx->fillText("hi", ~x=1., ~y=0., ())
ctx->strokeText("hi", ~x=1., ~y=0., ())

ctx->fillRect(~x=1., ~y=0., ~w=10., ~h=10.)
ctx->strokeRect(~x=1., ~y=0., ~w=10., ~h=10.)
ctx->clearRect(~x=1., ~y=0., ~w=10., ~h=10.)