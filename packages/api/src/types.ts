/**
 * turn all **string** enums to string literal union types
 * @author colinaaa
 */

import enums from '@uniqs/config';

export type EnumToUnion<Enum extends string> = `${Enum}`;

export type Env = EnumToUnion<enums.Env>;

export type Group = EnumToUnion<enums.Group>;

export type GroupOrTeam = EnumToUnion<enums.GroupOrTeam>;

export type InterviewType = EnumToUnion<enums.InterviewType>;

export type Status = EnumToUnion<enums.Status>;

export type MessageType = Status;

export type SMSType = EnumToUnion<enums.SMSType>;
