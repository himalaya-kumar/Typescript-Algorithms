
export default interface Graph<T> {
    numberOfNodes: number;
    adjacentList: Record<string,string[]>;
    addVertex(node: string): boolean;
    addEdge(vertex: string, node: string): boolean;
    hasEdge(vertex: string, node: string): boolean;
    displayConnections(): void;
}

export default class Graph<T> implements Graph<T> {

    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    public addVertex(node: string): boolean {
        if (!this.adjacentList[node]) {
            this.adjacentList[node] = [];
        } else {
            throw new Error('the node already exist');
        }
        this.numberOfNodes++;
        return true;
    }

    public addEdge(vertex: string, node: string) {
        let hasEdge = this.hasEdge(vertex, node);
        if (!hasEdge) {
            this.adjacentList[vertex].push(node);
            this.adjacentList[node].push(vertex);
        } else {
            throw new Error('The Node does not exist');
        }
        return true;
    }

    public hasEdge(vertex: string, node: string): boolean {
        let adjacents = this.adjacentList[vertex];
        for (let i = 0; i < adjacents.length; i++) {
            if (node === adjacents[i]) {
                return true;
            }
        }
        return false;
    }

    public displayConnections(): void {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = '';
            let vertex: string;
            for (vertex of nodeConnections) {
                connections += vertex + ' ';
            }
            console.log(node + ' --> ' + connections);
        }
    }
}