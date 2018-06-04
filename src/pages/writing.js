import * as React from "react";
import { default as Markdown } from "react-markdown";

import Loading from "../components/loading";
import PageWriting from "../components/page-writing";
import PageWritingPost from "../components/page-writing-post";
import * as data from "../data/pageWriting";

const routes = [{ path: "/writing" }];
data.items.map(i =>
  routes.push({
    path: `/writing/${i.slug}`
  })
);

export default class Writing extends React.Component {
  static async getInitialProps() {
    return {
      routes,
      path: "/writing/:slug*"
    };
  }

  render() {
    if (this.props.match && this.props.match.params.slug) {
      const post = data.items
        .filter(i => i.slug === this.props.match.params.slug)
        .pop();
      return <PageWritingPost {...post} />;
    }

    return <PageWriting {...data} />;
  }
}
