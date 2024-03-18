
interface TrieNode {
    // children
    c: { [key: string]: TrieNode };
    // values
    v: number[];
}

export class Trie {
    static logger = {
        debug: (msg: string) => console.log(msg),
    }
    root: TrieNode;

    constructor(root?: TrieNode) {
        this.root = root ?? {
            c: {},
            v: []
        }
    }

    toJSON(): string {
        let startTime = Date.now()
        try {
            return JSON.stringify(this.root);
        } finally {
            let endTime = Date.now()
            Trie.logger.debug(`Serializing trie to JSON took ${endTime - startTime} miliseconds`)
        }
    }

    toJSON_initial(): { [key: string]: string } {
        return Object.getOwnPropertyNames(this.root.c)
            .map(key => {
                return {
                    [key]: JSON.stringify(this.root.c[key])
                }
            }).reduce((acc, cur) => {
                return { ...acc, ...cur }
            }, {})

    }

    static fromJSON(json: string): Trie {
        const trie = new Trie();
        let startTime = Date.now()
        try {
            trie.root = JSON.parse(json);
        } finally {
            let endTime = Date.now()
            Trie.logger.debug(`Deserializing trie from JSON took ${endTime - startTime}`)
        }
        return trie;
    }

    /**
     * 
     * @param key 
     * @param value 
     * @param partial if the value is a partial match or a full match
     */
    insert(key: string, value: number, partial: boolean) {
        let node = this.root;
        key = key.toLowerCase();
        for (let char of key) {
            if (!node.c[char]) {
                node.c[char] = {
                    c: {},
                    v: []
                }
            }
            node = node.c[char];
        }
        if (!node.v.includes(value)) {
            value = partial ? -value : value
            node.v.push(value);
        }
    }

    search(prefixes: string[]): { key: string; values: number[] }[] {
        let startTime = Date.now()
        try {
            let results: { [key: string]: number[] } = {};

            // Perform individual searches for each prefix
            for (let prefix of prefixes) {
                prefix = prefix.toLowerCase()
                let prefixResults = this.searchPrefix(prefix);
                if (prefixResults.length === 0) {
                    return []; // If any prefix doesn't match any keys, return empty result
                }
                for (let result of prefixResults) {
                    if (!results[result.key]) {
                        results[result.key] = result.values;
                    } else {
                        results[result.key] = results[result.key].filter(value => result.values.includes(value));
                    }
                }
            }

            // Filter results to keep only keys that match all prefixes
            let finalResults: { key: string; values: number[] }[] = [];
            for (let key in results) {
                if (this.matchesAllPrefixes(key, prefixes)) {
                    finalResults.push({ key: key, values: results[key] });
                }
            }

            return finalResults;
        } finally {
            let endTime = Date.now()
            Trie.logger.debug(`Searching trie for ${prefixes} took ${endTime - startTime} miliseconds`)
        }
    }


    private searchPrefix(prefix: string): { key: string; values: number[] }[] {
        let node = this.root;
        for (let char of prefix) {
            if (!node.c[char]) {
                return []; // If the prefix doesn't match any keys, return empty result
            }
            node = node.c[char];
        }
        return this.collect(prefix, node);
    }

    private collect(prefix: string, node: TrieNode): { key: string; values: number[] }[] {
        let results: { key: string; values: number[] }[] = [];
        if (node.v.length > 0) {
            results.push({ key: prefix, values: node.v });
        }
        for (let char in node.c) {
            results = results.concat(this.collect(prefix + char, node.c[char]));
        }
        return results;
    }

    private matchesAllPrefixes(key: string, prefixes: string[]): boolean {
        for (let prefix of prefixes) {
            prefix = prefix.toLowerCase();
            if (!key.includes(prefix)) {
                return false;
            }
        }
        return true;
    }
}
