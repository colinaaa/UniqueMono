import { Status } from '@uniqs/config';
import { Candidate, CandidateForm, Interview, Recruitment, User } from './types';

interface SuccessResponse<T> {
  status: Status.success | Status.info;
  payload: T;
}

interface FailureResponse {
  status: Status.warning | Status.error;
  message: string;
}

export const isSuccess = <T>(resp: R<T>): resp is SuccessResponse<T> =>
  resp.status === Status.success || resp.status === Status.info;
export const isFailure = <T>(resp: R<T>): resp is FailureResponse => !isSuccess(resp);

export type R<T = undefined> = SuccessResponse<T> | FailureResponse;
export type Response<T> = R<T>;

type EmptyResp = R<undefined>;

// =================
// auth
// =================

// response with token
type AuthResp = R<string>;

// GET /auth/user/qrCode
export type GetQRCode = AuthResp;

// GET /auth/user/qrCode/:key
export type LoginUserQRCodeResp = AuthResp;

// POST /auth/user/login
export type LoginUserResp = AuthResp;

// POST /auth/candidate/login
export type LoginCandidateResp = AuthResp;

// =================
// candidates
// =================

// POST /candidates
export type SubmitCandidateFormResp = EmptyResp;

// GET /candidates/me
export type GetCandidateInfoResp = R<Omit<CandidateForm, 'resume'>>;

// PUT /candidates/me
export type UpdateCandidateInfoResp = EmptyResp;

// GET /candidates/me/slots
export type GetInterviewSlotsResp<T> = R<Interview<T>[]>;

// PUT /candidates/me/slots
export type SubmitSlotsResp = EmptyResp;

// GET /candidates/:cid/resume
export type GetResumeResp = Blob;

// GET /candidates/recruitment/:rid
export type GetCandidatesInRecruitmentResp<T> = R<Candidate<T>[]>;

// PUT /candidates/:cid/step
export type UpdateCandidateStep = EmptyResp;

// DELETE /candidate/:cid
export type RemoveCandidateResp = EmptyResp;

// PUT /candidates/:cid/interview/:type
export type AllocateOneResp = EmptyResp;

// PUT /candidates/interview/:type
export type AllocateManyResp<T = Date> = R<
  {
    /**
     * candidate id
     */
    id: string;
    time: T;
  }[]
>;

// =================
// recruitments
// =================

// GET /recruitments/pending
export type GetPendingTitlesResp<T> = R<Omit<Recruitment<T>, 'interviews' | 'statistics'>[]>;

// GET /recruitments/:rid
export type GetOneRecruitmentResp<T> = R<Recruitment<T>>;

// GET /recruitments
export type GetAllRecruitmentResp<T> = R<Recruitment<T>[]>;

// POST /recruitments
export type CreateRecruitmentResp = EmptyResp;

// PUT /recruitments/:rid/schedule
export type SetRecruitmentScheduleResp = EmptyResp;

// PUT /recruitments/:rid/interviews/:name
export type SetRecruitmentInterviewResp = EmptyResp;

// =================
// sms
// =================

// GET /sms/verification/candidate/:phone
// GET /sms/verification/user
// POST /sms
export type SendSMSResp = EmptyResp;

// =================
// users
// =================

// GET /users/me
export type GetUserInfoResp = R<Omit<User, 'password'>>;

// PUT /users/me
export type SetUserInfoResp = EmptyResp;

// GET /users/group
export type GetGroupInfoResp = R<Omit<User, 'password'>[]>;

// PUT /users/admin
export type SetAdminResp = R<string[]>; // the admins' id
