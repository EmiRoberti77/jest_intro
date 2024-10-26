export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

type LoggerServiceCallBacl = (arg: string) => void;

export function calculateComplexity(stringInfo: stringInfo) {
  return Object.keys(stringInfo.extraInfo!).length * stringInfo.length;
}

export function toUpperCaseWithCb(
  arg: string,
  callBack: LoggerServiceCallBacl
) {
  if (!arg) {
    callBack("Invalid arg");
    return undefined;
  }
  callBack(`function called with ${arg}`);
  return arg.toUpperCase();
}
