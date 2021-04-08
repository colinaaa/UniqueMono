import { Group, Period, Step, StepType } from './enums';

export const STEP_MAP: Readonly<Record<Step, string>> = {
  [Step.报名]: '报名流程',
  [Step.笔试]: '笔试流程',
  [Step.组面时间选择]: '组面时间选择流程',
  [Step.组面]: '组面流程',
  [Step.熬测]: '熬测流程',
  [Step.群面时间选择]: '群面时间选择流程',
  [Step.群面]: '群面流程',
  [Step.通过]: '通过',
};

export const RECRUITMENT_NAME_MAP: Readonly<Record<string, string>> = {
  S: '春季招新',
  C: '夏令营招新',
  A: '秋季招新',
};

export const ID_GROUP_MAP: Readonly<Record<number, Group>> = {
  2: Group.web,
  3: Group.pm,
  4: Group.ai,
  5: Group.android,
  6: Group.game,
  7: Group.lab,
  8: Group.ios,
  9: Group.design,
  15: Group.web,
  16: Group.android,
  17: Group.ai,
  18: Group.game,
  19: Group.ios,
  20: Group.design,
  21: Group.lab,
  22: Group.lab,
  23: Group.lab,
  24: Group.lab,
  25: Group.pm,
};

export const SLOTS: Readonly<Record<Period, number[]>> = {
  [Period.morning]: [9, 9.5, 10, 10.5, 11, 11.5, 8.5, 8, 7.5],
  [Period.afternoon]: [14.5, 15, 15.5, 16, 16.5, 17, 14, 13.5, 13, 12.5],
  [Period.evening]: [18.5, 19, 19.5, 20, 20.5, 21, 21.5, 18, 22],
};

export const ZHANG_XIAO_LONG: ReadonlyMap<'mother', never> = new Map<'mother', never>();

export const GROUP_MAP: ReadonlyMap<Group, string> = new Map([
  [Group.web, 'Web'],
  [Group.lab, 'Lab'],
  [Group.ai, 'AI'],
  [Group.game, 'Game'],
  [Group.android, 'Android'],
  [Group.ios, 'iOS'],
  [Group.design, 'Design'],
  [Group.pm, 'PM'],
]);

export const STEP_SHORT_MAP: ReadonlyMap<Step, string> = new Map([
  [Step.报名, '报名'],
  [Step.笔试, '笔试'],
  [Step.组面时间选择, '组面时间选择'],
  [Step.组面, '组面'],
  [Step.熬测, '熬测'],
  [Step.群面时间选择, '群面时间选择'],
  [Step.群面, '群面'],
  [Step.通过, '通过'],
]);

export const STEP_TYPE_MAP: ReadonlyMap<StepType, string> = new Map([
  [StepType.all, '全部'],
  [StepType.groupInterview, '组面'],
  [StepType.teamInterview, '群面'],
]);

export const PERIOD_MAP: ReadonlyMap<Period, string> = new Map([
  [Period.morning, '上午'],
  [Period.afternoon, '下午'],
  [Period.evening, '晚上'],
]);

export const RANKS = ['暂无', '前10%', '前25%', '前50%', '前100%'] as const;
export const GRADES = ['大一', '大二', '大三', '大四', '研究生'] as const;
export const GENDERS = ['其他', '男', '女'] as const;
