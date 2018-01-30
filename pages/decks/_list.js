const decks = {
  "dont-leave-cash-in-the-cart": {
    title: "Don't Leave Cash in the Cart",
    description:
      "Presented this iteration of this Heartland eCommerce presentation at the Internet Merchants Association's sessions during ASD Market Week…",
  },
  "beginners-hands-on-with-haskell": {
    title: "Beginner's Hands-On with Haskell",
    description:
      "From the meetup description: An interactive workshop for newcomers to Haskell and functional programming. Meetup",
  },
  "plug-friend-of-web-developers": {
    title: "Plug, Friend of Web Developers",
    description:
      "From the meetup description: We'll cover the Plug specification, using the web server adapters, and composing Plug modules/functions into…",
  },
  "introduction-to-testing-with-exunit": {
    title: "Introduction to Testing with ExUnit",
    description:
      "From the meetup description: Bring your laptops for this workshop where we walk through basic testing using ExUnit, Elixir's built-in…",
  },
  "functional-programming-principles-in-elixir": {
    title: "Functional Programming Principles in Elixir",
    description:
      "From the meetup description: Join us as we discuss core functional programming principles, focusing on Elixir's usage/implementation of them…",
  },
  "http-and-me": {
    title: "HTTP and Me",
    description:
      "An introduction to HTTP and how it drives the modern web. Deck was created for and targeted at a lunch and learn for developers, designers…",
  },
  "go-an-introduction": {
    title: "Go: An Introduction",
    description:
      "An introduction to the Go programming language. Deck was created for and targeted at a lunch and learn for developers at Blackstone Media…",
  },
};

const deckList = [];

for (const slug in decks) {
  if (!decks.hasOwnProperty(slug)) {
    continue;
  }

  const entry = decks[slug];
  entry.slug = `/decks/${slug}`;
  deckList.push(entry);
}

module.exports = {
  decks,
  deckList,
};
