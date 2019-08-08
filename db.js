const neo4j = require('neo4j-driver').v1;

const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', 'twitter'));
let session = driver.session();

session
  .run('MATCH(n:Movie) RETURN n LIMIT 25')
  .then(result => result.records.forEach(console.log))
  .catch(console.log);