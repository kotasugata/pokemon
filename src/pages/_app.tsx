import React, { ReactElement } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "@/components/Layout";
import "../../styles/app.scss";
import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Layout>
      <Head>
        <title>react-md with next.js</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </Layout>
  );
}
