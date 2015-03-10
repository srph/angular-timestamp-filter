### v0.1.0

**Implementation**
- Fixed incompatibility issue with **Firefox** (wherein provided date (string) contains dashes (`-`)), e.g. `11-23-1996` returned value to be `NaN`.

**Misc**
- Added uglified file
- Moved entry file to `/src/`

### v0.0.1

- Initialized project
- Added basic implementation (since it is mainly a wrapper for ```Date.parse``` or ```new Date()```)