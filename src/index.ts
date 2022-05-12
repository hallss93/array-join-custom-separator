export function ArrayJoinWithCustomSeparator(input: any[], separator = ", ", lastSeparator = " e ") {
  const last = input.pop();
  return input.join(separator) + lastSeparator + last;
}
