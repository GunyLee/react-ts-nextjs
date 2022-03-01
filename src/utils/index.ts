import { useMemo } from "react";
import { useRouter } from "next/router";
import createCache from "@emotion/cache";
export function createEmotionCache() {
  return createCache({ key: "css" });
}
export function useParam(index: number) {
  const router = useRouter();
  return useMemo(() => router.query.slug?.[index] ?? null, [router.query]);
}
