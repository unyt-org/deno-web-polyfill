/**
 * enables loading deno modules in the web by polyfilling the Deno namespace
 */ 
import { DenoWebPolyfill } from "./deno.ts";

if (!globalThis.Deno) {
	globalThis.Deno = new DenoWebPolyfill() as unknown as typeof Deno;
}