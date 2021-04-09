import { Gender, Grade, Rank, Step } from '@uniqs/config';
import { Comment, Group, Interview, SMSType } from './types';

// =================
// auth
// =================

// POST /user/login
export interface AuthCode {
  phone: string;
  code: string;
}

// POST candidate/login
export interface AuthPassword {
  phone: string;
  password: string;
}

// =================
// candidates
// =================

export interface SetCandidateInfo {
  name: string;
  gender: Gender;
  group: Group;
  grade: Grade;
  institute: string;
  major: string;
  rank: Rank;
  mail: string;
  intro: string;
  isQuick: boolean;
  referrer?: string;
  resume?: File | FileList | string;
}

export interface CreateCandidate extends SetCandidateInfo {
  phone: string;
  rid: string;
}

export interface MoveCandidate {
  from: Step;
  to: Step;
}

export interface AllocateOne {
  time: string;
}

export interface AllocateMany {
  cids: string[];
}

// =================
// comments
// =================

export interface AddComment {
  cid: string;
  comment: Comment;
  token: string;
}

export interface RemoveComment {
  id: string;
  token: string;
}

export interface SetRecruitmentSchedule {
  beginning: string;
  deadline: string;
  end: string;
}

export interface SetRecruitmentInterviews {
  inverviews: Interview[];
}

export interface CreateRecruitment {
  name: string;
}

export interface SendSMSToCandidate {
  type: SMSType;
  time?: string;
  place?: string;
  rest?: string;
  next: Step;
  cids: string[];
}

export interface SetUserInfo {
  mail: string;
  phone: string;
  password?: string;
}
