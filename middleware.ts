import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default AuthenticateWithRedirectCallback({
  publicRoutes: ['/', '/sign-in(.*)', '/sign-up(.*)'],
});

export const config = {
matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};