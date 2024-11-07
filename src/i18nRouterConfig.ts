export const i18nRouterConfig: {
  locales: string[];
  defaultLocale: string;
  prefixDefault: boolean;
  serverSetCookie: "always" | "if-empty" | undefined;
} = {
  locales: ["en", "ar"],
  defaultLocale: "ar",
  prefixDefault: false,
  serverSetCookie: "always",
};
