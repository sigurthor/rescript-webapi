open Webapi.Dom

let handleSelection = _ => Js.log("change")

let elm = document->Document.createElement("strong")

elm->Element.addSelectionChangeEventListenerWithOptions(
  handleSelection,
  {"passive": true, "once": true, "capture": false},
)
elm->Element.addSelectionChangeEventListenerUseCapture(handleSelection)
elm->Element.removeSelectionChangeEventListener(handleSelection)
elm->Element.removeSelectionChangeEventListenerWithOptions(
  handleSelection,
  {"passive": true, "capture": false},
)
elm->Element.removeSelectionChangeEventListenerUseCapture(handleSelection)

let htmlElm =
  document
  ->Document.createElement("strong")
  ->HtmlElement.ofElement
  ->TestHelpers.unsafelyUnwrapOption

htmlElm->HtmlElement.addSelectionChangeEventListenerWithOptions(
  handleSelection,
  {"passive": true, "once": true, "capture": false},
)
htmlElm->HtmlElement.addSelectionChangeEventListenerUseCapture(handleSelection)
htmlElm->HtmlElement.removeSelectionChangeEventListener(handleSelection)
htmlElm->HtmlElement.removeSelectionChangeEventListenerWithOptions(
  handleSelection,
  {"passive": true, "capture": false},
)
htmlElm->HtmlElement.removeSelectionChangeEventListenerUseCapture(handleSelection)

let htmlDoc = document->Document.asHtmlDocument->TestHelpers.unsafelyUnwrapOption

htmlDoc->HtmlDocument.addSelectionChangeEventListenerWithOptions(
  handleSelection,
  {"passive": true, "once": true, "capture": false},
)
htmlDoc->HtmlDocument.addSelectionChangeEventListenerUseCapture(handleSelection)
htmlDoc->HtmlDocument.removeSelectionChangeEventListener(handleSelection)
htmlDoc->HtmlDocument.removeSelectionChangeEventListenerWithOptions(
  handleSelection,
  {"passive": true, "capture": false},
)
htmlDoc->HtmlDocument.removeSelectionChangeEventListenerUseCapture(handleSelection)

window->Window.addSelectionChangeEventListenerWithOptions(
  handleSelection,
  {"passive": true, "once": true, "capture": false},
)
window->Window.addSelectionChangeEventListenerUseCapture(handleSelection)
window->Window.removeSelectionChangeEventListener(handleSelection)
window->Window.removeSelectionChangeEventListenerWithOptions(
  handleSelection,
  {"passive": true, "capture": false},
)
window->Window.removeSelectionChangeEventListenerUseCapture(handleSelection)
