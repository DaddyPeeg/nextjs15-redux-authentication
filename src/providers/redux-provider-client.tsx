"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { CurrentAuthUserState } from "@/types";
import { loadUser } from "@/redux/reducers/user-reducers";

const ReduxProvider = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user?: CurrentAuthUserState;
}) => {
  if (user) {
    store.dispatch(loadUser(user));
  }

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
