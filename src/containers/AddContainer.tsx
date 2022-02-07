import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { goBack } from "connected-react-router";

import Add from "../components/Add";
import { RootState, BookReqType } from "../types";
import { logout as logoutSaga } from "../redux/modules/auth";
import { addBook as addBookSagaStart } from "../redux/modules/books";

const AddContainer = () => {
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );
  const error = useSelector<RootState, Error | null>(
    (state) => state.books.error
  );
  const dispatch = useDispatch();

  // const getBooks = useCallback(() => {
  //   dispatch(getBooksSaga());
  // }, [dispatch]);

  // const add = useCallback(
  //   (book: BookReqType) => {
  //     dispatch(addBookSaga(book));
  //   },
  //   [dispatch],
  // );

  const back = useCallback(() => {
    dispatch(goBack());
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch(logoutSaga());
  }, [dispatch]);

  const add = useCallback(
    (book: BookReqType) => {
      dispatch(addBookSagaStart(book));
    },
    [dispatch]
  );

  return <Add loading={loading} back={back} logout={logout} add={add} />;
};

export default AddContainer;
