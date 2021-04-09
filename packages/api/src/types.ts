import enums, { Evaluation, Gender, Grade, Period, Rank, Step } from '@uniqs/config';

export interface CandidateForm {
  id: string;
  name: string;
  gender: Gender;
  grade: Grade;
  institute: string;
  major: string;
  rank: Rank;
  mail: string;
  phone: string;
  group: Group;
  intro: string;
  isQuick: boolean;
  referrer?: string;
  step: Step;
  abandoned: boolean;
  rejected: boolean;
  resume?: string | File | FileList;
}

export interface Candidate<T = Date> extends CandidateForm {
  updatedAt: T;
  interviewSelections: Interview<T>[];
  interviewAllocations: {
    group?: T;
    team?: T;
  };
  comments: Comment[];
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  evaluation: Evaluation;
}

export interface User {
  id: string;
  weChatID: string;
  name: string;
  password?: string;
  joinTime: string;
  isCaptain: boolean;
  isAdmin: boolean;
  phone: string;
  mail?: string;
  gender: Gender;
  group: Group;
  avatar?: string;
}

export interface Interview<T = Date> {
  id: string;
  date: T;
  period: Period;
  name: GroupOrTeam;
  slotNumber: number;
}

export interface Recruitment<T = Date> {
  id: string;
  name: string;
  beginning: T;
  deadline: T;
  end: T;
  interviews: Interview<T>[];
  statistics?: Record<Group, Record<Step, number | undefined> | undefined>;
}

export interface Message {
  isSelf: boolean;
  name: string;
  time: number;
  isImage: boolean;
  avatar: string;
  content: string;
}

/**
 * turn **string** enums to string literal union types
 * @author colinaaa
 */
export type EnumToUnion<Enum extends string> = `${Enum}`;

export type Env = EnumToUnion<enums.Env>;

export type Group = EnumToUnion<enums.Group>;

export type GroupOrTeam = EnumToUnion<enums.GroupOrTeam>;

export type InterviewType = EnumToUnion<enums.InterviewType>;

export type Status = EnumToUnion<enums.Status>;

export type MessageType = Status;

export type SMSType = EnumToUnion<enums.SMSType>;
