export function domainType(domains: string[]): string[] {
    return domains.map((i) => {
        return i.includes(".com") ? "commercial" : i.includes(".org") ? "organization" : i.includes(".net") ? "network" : "information"
    })
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));