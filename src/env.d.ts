/// <reference path="../.astro/types.d.ts" />
declare const gsap: typeof import("gsap");
declare module "sockjs-client" {
  const SockJS: any;
  export default SockJS;
}

// You can also add global declarations for SockJS if you want it to be available everywhere
declare global {
  var SockJS: any;
}
