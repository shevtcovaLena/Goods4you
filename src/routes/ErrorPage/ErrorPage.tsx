import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useRouteError } from "react-router-dom";

interface IError {
  statusText?: string;
  message?: string;
  status?: number | string;
  error?:string;
  data: {message: string};
}

interface Props {
  externalError?: FetchBaseQueryError | SerializedError;
}

export function ErrorPage({ externalError }: Props) {
  const error = useRouteError() as IError || externalError as IError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>{`Ошибка! ${error?.status? error.status : ""}`}</h1>
      <p>Извините, произошла ошибка.</p>
      <p>
        <i>{error?.statusText || error?.message || error?.error || error?.data?.message}</i>
      </p>
    </div>
  );
}
