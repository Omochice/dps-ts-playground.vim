import L from "npm:lz-string@1.5.0";

/**
 * Get the playground URL from the code.
 *
 * @param code The code
 * @returns Generated playground URL
 */
export function getPlaygroundUrl(code: string): string {
  const url = new URL("https://www.typescriptlang.org/play");
  const codeParam = L.compressToEncodedURIComponent(code);
  const hash = `code/${codeParam}`;
  // FIXME: URLSearchParams が使えない
  return `${url.href}#${hash}`;
}
