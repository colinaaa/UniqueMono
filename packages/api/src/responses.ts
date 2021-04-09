import { Status } from '@uniqs/config';

interface SuccessResponse<T> {
  status: Status.success | Status.info;
  payload: T;
}

interface FailureResponse {
  status: Status.warning | Status.error;
  message: string;
}

export type R<T = undefined> = SuccessResponse<T> | FailureResponse;
export type Response<T> = R<T>;
