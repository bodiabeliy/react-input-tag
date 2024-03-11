import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { store, wrapper } from "../providers/store";
import { AppProps } from "next/app";

import { appWithTranslation } from "next-i18next";
import Navbar from "../widgets/Navbar/Navbar";

import "../styles/globals.css";
import { AnyAction, Store } from "redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ApplicationProps {
  Component: React.ElementType;
  pageProps: AppProps;
}

const queryClient = new QueryClient();

function App({ Component, pageProps }: ApplicationProps) {
  const storeRef = useRef<Store<unknown, AnyAction> | null>(null);
  if (!storeRef.current) {
    storeRef.current = store();
  }
  return (
    <>
      <QueryClientProvider client={queryClient}>
          <Navbar />
          <div className="flex">
            <Component {...pageProps} />
          </div>
      </QueryClientProvider>
    </>
  );
}
export default appWithTranslation(wrapper.withRedux(App));
