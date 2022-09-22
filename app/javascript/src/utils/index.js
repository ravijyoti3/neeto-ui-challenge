import * as R from "ramda";

const camelize = str =>
  str
    .toLowerCase()
    .replace(/([-][a-z0-9])|(\s[a-z0-9])/gi, m => m[1].toUpperCase());

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);

export const buildSelectOption = options =>
  options.map(option => ({ label: option, value: camelize(option) }));
