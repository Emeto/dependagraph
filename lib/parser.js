const fs = require('fs');
const _ = require('lodash');

class Parser {
  data;
  edges;
  filePath;
  nodes;
  projectName;
  projectVersion;

  constructor(filePath) {
    this.filePath = filePath;
  }

  _data() {
    return this.data;
  }

  _nodes() {
    return this.nodes;
  }

  _edges() {
    return this.edges;
  }

  _filePath() {
    return this.filePath;
  }

  _projectName() {
    return this.projectName;
  }

  _projectVersion() {
    return this.projectVersion;
  }

  set data(data) {
    this.data = data;
  }

  set nodes(nodes) {
    this.nodes = nodes;
  }

  set edges(edges) {
    this.edges = edges;
  }

  getLockFileContent() {
    let fileData = fs.readFileSync(this.filePath);

    this.data = JSON.parse(fileData.toString());
  }

  async parse() {
    await this.getLockFileContent();

    this.projectName = this.data.name;
    this.projectVersion = this.data.version;

    if (typeof this.data.dependencies === 'undefined') {
      throw Error('No dependencies found in project file');
    }
  }

  getDependenciesCount() {
    if (typeof this.data.dependencies === 'undefined') {
      throw Error('No dependencies found in project file');
    }

    return _.size(this.data.dependencies).toString();
  }

  generateNodes() {
    console.log('[parser > generateNodes()] Generating graph nodes...');

    this.nodes = [];
    let i = 1;

    for (const dependency in this.data.dependencies) {
      console.log('[parser > generateNodes()] Found project dependency : ' + dependency + ' (v. ' + this.data.dependencies[dependency].version + ')');
      this.nodes.push({
        id: i,
        label: dependency
      });
      i++;
    }

    console.log('[parser > generateNodes()] Generated a total of ' + this.nodes.length + ' nodes');
  }

  generateEdges() {
    console.log('[parser > generateEdges()] Generating graph edges...');

    this.edges = [];

    for (const dependency in this.data.dependencies) {
      if (typeof this.data.dependencies[dependency].requires !== 'undefined') {
        console.log('[parser > generateEdges()] Found ' + _.size(this.data.dependencies[dependency].requires) + ' sub-dependency/ies for : ' + dependency + ' (v. ' + this.data.dependencies[dependency].version + ')');

        let from = _.find(this.nodes, function (o) {
          return o.label === dependency;
        });
        for (const requirement in this.data.dependencies[dependency].requires) {
          let to = _.find(this.nodes, function (o) {
            return o.label === requirement;
          });

          console.log('[parser > generateEdges()] Added edge from ' + from.label + ' to ' + to.label);

          this.edges.push({
            from: from.id,
            to: to.id
          })
        }
      } else {
        console.log('[parser > generateEdges()] No sub-dependencies for ' + dependency + ' found...');
      }
    }
  }

  generateDocument() {
    console.log('[parser > generateDocument()] Generating dependagraph document...');

    if (!fs.existsSync(process.cwd() + '/dependagraph')) {
      fs.mkdirSync(process.cwd() + '/dependagraph');
    }

    let document =
`<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Dependagraph for ${this.projectName} v. ${this.projectVersion}</title>
        <style>
            #dependagraph {
                width: 1200px;
                height: 800px;
                border: 1px solid lightgray;
            }
        </style>
    </head>
    <body>
        <h3>Dependagraph for ${this.projectName} v. ${this.projectVersion}</h3>
        <div id="dependagraph"></div>
        <script type="text/javascript" src="https://visjs.github.io/vis-network/standalone/umd/vis-network.min.js"></script>
        <script type="text/javascript">
            var nodes = new vis.DataSet(${JSON.stringify(this.nodes)});
            var edges = new vis.DataSet(${JSON.stringify(this.edges)});
            var container = document.getElementById('dependagraph');
            var data = \{
              nodes: nodes,
              edges: edges,
            \};
            var network = new vis.Network(container, data, \{\});
        </script>
    </body>
</html>`;
    const documentName = `dependagraph_${this.projectName}_${this.projectVersion}_${Date.now()}.html`;
    fs.writeFileSync(`${process.cwd()}/dependagraph/${documentName}`, document);
    console.log('[parser > generateDocument()] Document created : ' + documentName);
  }
}

module.exports = Parser;
