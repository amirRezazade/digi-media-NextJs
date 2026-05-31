import { setGlobalDispatcher, ProxyAgent } from "undici";

export async function register() {
  setGlobalDispatcher(new ProxyAgent("http://127.0.0.1:10808"));
}
