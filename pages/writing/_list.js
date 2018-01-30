const posts = {
  "fiddling-with-asp-dotnet-core-and-fsharp-with-suave": {
    title: "Fiddling with ASP.NET Core and F# with Suave",
    description:
      "Suave is a possible replacement for the ASP.NET stack, but with some help, the two can be used together to build composable F# web applications.",
  },
  "asp-dotnet-core-webapi-in-azure-app-service": {
    title: "ASP.NET Core WebAPI in Azure App Service",
    description:
      "In my opinion, Azure App Services are an easy and direct way to launch your ASP.NET Core application for the outside world to access. Azure App Service offers a free tier, perfect for tinkering or getting a new project off the ground.",
  },
  "cross-compiling-rust-applications-for-the-onion-omega2-from-macos": {
    title: "Cross-Compiling Rust Applications for the Onion Omega2 from MacOS",
    description:
      "Onion's Omega2 SoC computers are a prime target for cross-compiling Rust applications, taking care to set up your environment just right for the Omega2's MIPS architecture.",
  },
  "exploring-fsharp-with-dotnet-core-and-kestrel": {
    title: "Exploring F# with .NET Core and Kestrel",
    description:
      "While not the primary focus of Microsoft's efforts, F# makes for an excellent language choice for applications targeting .NET Core.",
  },
  "simple-php-socket-programming": {
    title: "Simple PHP Socket Programming",
    description:
      "PHP isn't just for templates for Apache's mod_php. Let's have fun with socket programming in PHP.",
  },
  "functors-applicatives-and-monads-in-elixir": {
    title: "Functors, Applicatives, and Monads in Elixir",
    description:
      "Elixir doesn't have native modules for functors, applicatives, and monads. Is it possible to create them? Is it worth it?",
  },
  "pitstop-with-the-elixir-genevent-module": {
    title: "Pitstop with the Elixir GenEvent Module",
    description:
      "Take a break with me as I make a pitstop the Elixir GenEvent module, seeing what it can offer in a real life project.",
  },
  "wordpress-docker-and-you": {
    title: "WordPress, Docker, and You",
    description:
      "Wordpress, Docker, and your site can work together in harmony with the right configuration. Follow along as I spill the beans.",
  },
  "im-learning-haskell-for-real-this-time": {
    title: "I’m Learning Haskell For Real This Time",
    description:
      "About a couple of years ago, I was looking for something to add to my programming toolbox. Follow me on my journey of learning Haskell.",
  },
  "application-deployment": {
    title: "Application Deployment",
    description:
      "You may have experience in deploying your Ruby or .NET applications, but when it comes to Elixir, do you have what it takes to deploy your app? Learn the essentials for getting your application from development to production.",
  },
  "review-getting-started-with-phalcon": {
    title: "Review: Getting Started with Phalcon",
    description:
      "Stephan A. Miller brings the self-proclaimed “fastest PHP framework” to the masses in his new book, Getting Started with Phalcon.",
  },
  "migrate-your-site-without-killing-your-search-engine-presence": {
    title: "Migrate Your Site Without Killing Your Search Engine Presence",
    description:
      "SEO is a hard beast to tame. Once you have everything just right, moving to a new platform, a new URL structure, or even a new domain can be stressful without taking the necessary steps first.",
  },
  "writing-api-wrappers-with-elixir": {
    title: "Writing API Wrappers with Elixir",
    description:
      "Recently, I built an API wrapper for Mandrill. Let's walk through the steps I used to create it and see if this process might be able to help you in your next project.",
  },
  "implementing-user-authentication-with-bcrypt-in-chicagoboss": {
    title: "Implementing User Authentication with bcrypt in ChicagoBoss",
    description:
      "Don't rely on MD5/SHA1/SHA256/etc. hashes for storing passwords. Join me in learning how to bcrypt in Erlang applications.",
  },
  acvte: {
    title: "Acvte",
    description:
      "What it is A markdown blog based off of @natew's obtvse2 , which was originally inspired by svbtle , using Today theme contributed to…",
  },
  "migrating-to-acvte": {
    title: "Migrating to Acvte",
    description:
      "Remember this ? I do. I finally got acvte to a point where I was comfortable using it in production for this website. So far, the…",
  },
  chicagoboss: {
    title: "ChicagoBoss",
    description:
      "I need to stop finding awesome projects to try out. Erlang and ChicagoBoss look pretty freakin' sweet. Have to love some high…",
  },
  "im-already-tired-of-rails-already": {
    title: "I’m already tired of Rails…already",
    description:
      "Neckbeards of the Internet. Prepare yourselves for the following comment: I don't think Rails is for me. I love Ruby as a scripting language…",
  },
  "vagrant-is-awesome": {
    title: "Vagrant is Awesome",
    description:
      "I've been working on PHP web apps for years, and over time, my development workflow has remained fairly constant: Configure new app in…",
  },
  "migrating-from-mysql-server-to-percona-server": {
    title: "Migrating from MySQL Server to Percona Server",
    description:
      "What is Percona Server, and why should I care? Blogs across the Internet have been benchmarking Percona Server against MySQL Server, e.g…",
  },
  "using-obtvse2": {
    title: "Using obtvse2",
    description:
      "I will be using obtvse2 for the forseeable future. I might finish up my scriptogram clone and release it yet, but I've got other plans for…",
  },
  "linux-and-net-should-be-friends": {
    title: "Linux and .NET should be friends",
    description:
      "Linux and Microsoft's .NET framework haven't always seen eye to eye. The Mono Project looks to get Linux and .NET on the same page.",
  },
  "installing-nginx-percona-php-fpm-with-homebrew-on-mountain-lion": {
    title: "Installing nginx/percona/php-fpm with homebrew on Mountain Lion",
    description:
      "If it helps anyone else, that's an added bonus, but this is mainly just a reference point for me; I'm always forgetting what all needs to be…",
  },
};

const postList = [];

for (const slug in posts) {
  if (!posts.hasOwnProperty(slug)) {
    continue;
  }

  const entry = posts[slug];
  entry.slug = `/writing/${slug}`;
  postList.push(entry);
}

module.exports = {
  posts,
  postList,
};
