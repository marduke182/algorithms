import Graph from '../Graph';

test('should print graph', async () => {
  const spy = jest.spyOn(console, 'log');
  const graph = new Graph();

  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');

  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');

  graph.print();

  expect(spy).toBeCalledWith('A -> B C');
});