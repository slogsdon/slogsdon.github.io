import markdown from "markdown-in-js";

import { Code, InlineCode } from "../../components/code";
import withMd, { components } from "../../lib/with-md";

export default withMd({
  title: "Go: An Introduction",
  date: "2014-06-06",
  location: "Blackstone Media Lunch-and-Learn (Louisville, KY)",
  tags: ["golang", "talk"],
})(markdown(components)`

An introduction to the Go programming language. Deck was created for and targeted at a lunch and learn for developers at [Blackstone Media][1] and [StarkNine][2] in Louisville, KY.

${(
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/SI-okTfauyw"
    frameborder="0"
    allowfullscreen
  />
)}

${(
  <script
    async
    class="speakerdeck-embed"
    data-id="23665ae0cf24013149f97ab67bbd5fb5"
    data-ratio="1.33333333333333"
    src="//speakerdeck.com/assets/embed.js"
  />
)}

Referenced Links:

* <https://github.com/slogsdon/b> (for code walkthrough)
* <http://golang.org/>
* <http://tour.golang.org/>
* <http://godoc.org/>

Slides available at [SpeakerDeck][3].

[1]: http://www.blackstonemedia.com/
[2]: http://www.starknine.com/
[3]: https://speakerdeck.com/slogsdon/go-an-introduction
`);
