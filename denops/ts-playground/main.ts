import type { Denops } from "https://deno.land/x/denops_std@v6.3.0/mod.ts";
import * as fn from "https://deno.land/x/denops_std@v6.3.0/function/mod.ts";
import { getPlaygroundUrl } from "./url.ts";
import { systemopen } from "https://deno.land/x/systemopen@v0.2.0/mod.ts";

export function main(denops: Denops): void {
  denops.dispatcher = {
    getPlaygroundUrl: async () => {
      const code = (await fn.getline(denops, 1, "$")).join("\n");
      return getPlaygroundUrl(code);
    },
    openInPlayground: async () => {
      const code = (await fn.getline(denops, 1, "$")).join("\n");
      const url = getPlaygroundUrl(code);
      await systemopen(url);
    },
  };
}
