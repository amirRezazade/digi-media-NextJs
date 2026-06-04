import { setGlobalDispatcher, ProxyAgent } from "undici";

export async function register() {
  if (process.env.HTTP_PROXY) {
    setGlobalDispatcher(new ProxyAgent(process.env.HTTP_PROXY));
  }
}
