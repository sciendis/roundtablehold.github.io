import type { GetStaticProps, NextPage } from "next";
import { defaultGetStaticProps } from "src/util/gapi";
import { LayoutProps } from "./_app";

interface Props extends LayoutProps {}

const Home: NextPage<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  return defaultGetStaticProps();
};
