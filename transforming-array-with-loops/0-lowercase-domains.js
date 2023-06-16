// function name: lowercaseDomains
// parameters:
//   - DOMAIN_NAMES: array of strings
// returns: array of strings

// set CLEANED_DOMAINS to an empty array

// for each DOMAIN in DOMAIN_NAMES
		// set LOWERCASE_DOMAIN to lowercase(DOMAIN)
		// insert LOWERCASE_DOMAIN at the end of CLEANED_DOMAINS
// return CLEANED_DOMAINS




// test cases

console.log(
	lowercaseDomains(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]),
	["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"]
)

console.log(
	lowercaseDomains(["m1a.tech", "example.cO.UK", "HTTPS://JavaScript.Info"]),
	["m1a.tech", "example.co.uk", "https://javascript.info"]
)