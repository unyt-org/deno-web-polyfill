export class DenoWebPolyfill {
	
	pid = 0
	ppid = 0

	errors = {
		NotFound: class NotFound extends Error {},
    
		PermissionDenied: class PermissionDenied extends Error {},
		
		ConnectionRefused: class ConnectionRefused extends Error {},
		
		ConnectionReset: class ConnectionReset extends Error {},
		
		ConnectionAborted: class ConnectionAborted extends Error {},
		
		NotConnected: class NotConnected extends Error {},
		
		AddrInUse: class AddrInUse extends Error {},
		
		AddrNotAvailable: class AddrNotAvailable extends Error {},
		
		BrokenPipe: class BrokenPipe extends Error {},
		
		AlreadyExists: class AlreadyExists extends Error {},
		
		InvalidData: class InvalidData extends Error {},
		
		TimedOut: class TimedOut extends Error {},
		
		Interrupted: class Interrupted extends Error {},
		
		WouldBlock: class WouldBlock extends Error {},
		
		WriteZero: class WriteZero extends Error {},
		
		UnexpectedEof: class UnexpectedEof extends Error {},
		
		BadResource: class BadResource extends Error {},
		
		Http: class Http extends Error {},
		
		Busy: class Busy extends Error {},
		
		NotSupported: class NotSupported extends Error {},
		
		FilesystemLoop: class FilesystemLoop extends Error {},
		
		IsADirectory: class IsADirectory extends Error {},
		
		NetworkUnreachable: class NetworkUnreachable extends Error {},
		
		NotADirectory: class NotADirectory extends Error {},
	}

	memoryUsage() {
		return {
			rss: 0,
			heapTotal: 0,
			heapUsed: 0,
			external: 0
		}
	}

	hostname() {
		return "deno-web-polyfill"
	}

	loadavg() {
		return [0, 0, 0]
	}

	networkInterfaces() {
		return []
	}

	systemMemoryInfo() {
		return {
			total: 0,
			free: 0,
			available: 0,
			buffers: 0,
			cached: 0,
			swapTotal:0,
			swapFree: 0,
		}
	}

	noColor = true

	osRelease() {
		return "0.0.0"
	}

	osUptime() {
		return Math.round((new Date().getTime() - globalThis.performance.timeOrigin) / 1000)
	}
	
	exit() {
		try {
			globalThis.close()
		}
		catch {
			globalThis.location.reload()
		}
	}

	env = {
		get(key: string) {
			return undefined
		},

		set(key: string, value: string) {},
		delete(key: string) {},

		has(key: string) {
			return false
		},
	
		toObject() {
			return {}
		}
	}

	execPath = "/deno"

	chdir() {

	}

	cwd() {

	}

	link() {

	}

	linkSync() {

	}

	open() {

	}

	openSync() {

	}

	create() {

	}

	createSync() {

	}

	read() {

	}

	write() {

	}

	close() {

	}

	makeTempDir() {

	}

	makeTempDirSync() {

	}

	makeTempFile() {

	}

	makeTempFileSync() {

	}

	chmod() {

	}

	chmodSync() {

	}

	chown() {

	}

	chownSync() {

	}

	readFile() {
		return new Uint8Array()
	}

	readFileSync() {
		return new Uint8Array()
	}

	readTextFile() {
		return ""
	}

	readTextFileSync() {
		return ""
	}

	build = {
		target: "aarch64-apple-darwin",
		arch: "aarch64",
		os: "linux",
		vendor: "unyt.org",
		env: undefined
	}

	permissions = {
		query() {
			return new PermissionStatus()
		},

    	querySync() {
			return new PermissionStatus()
		},
  
		revoke() {
			return new PermissionStatus()
		},

		revokeSync() {
			return new PermissionStatus()
		},

		request() {
			return new PermissionStatus()
		},
  
		requestSync() {
			return new PermissionStatus()
		},
	}

	args = []

}


class PermissionStatus extends EventTarget {
    readonly state = "denied";
    readonly partial = false;    
}