import Node, { NullNode } from './Node';

const defaultScore = a => a;

/**
 *
 * @param {Node} node
 * @return {number}
 */
function getBalance(node) {
  if (node instanceof NullNode) {
    return 0;
  }

  return node.left.height - node.right.height;
}

function minValueNode(node) {
  while (!(node.left instanceof NullNode)) {
    node = node.left;
  }
  return node;
}

/**
 * @typedef {Object} AVL
 * @property {Node} _root
 * @property {function} insert
 * @property {function} delete
 * @property {function} reverseInOrder
 * @property {function} findNode
 */
export default class {
  constructor(scoreFn = defaultScore) {
    this._score = scoreFn;
    this._root = new NullNode();
  }

  /**
   * Insert a value into a node tree
   * @param {Node} node
   * @param {anything} value
   * @return {Node}
   */
  insertNode(node, value) {
    if (node instanceof NullNode) {
      return new Node(value);
    }

    const score = this._score(value);
    const nodeScore = this._score(node.value);

    // Normal bst insertion
    if (score < nodeScore) {
      node.left = this.insertNode(node.left, value);
    } else if (score > nodeScore) {
      node.right = this.insertNode(node.right, value);
    } else {
      // We don't create other node for the same _score
      return node;
    }

    // Update height
    node.height = 1 + Math.max(node.left.height, node.right.height);

    // Get Balance
    const balance = getBalance(node);
    // If this node becomes unbalanced, then there
    // are 4 cases Left Left Case
    if (balance === 2) {
      const scoreLeft = this._score(node.left.value);
      if (score < scoreLeft) {
        return node.rotateRight();
      } else {
        node.left = node.left.rotateLeft();
        return node.rotateRight();
      }
    }

    // Right Right Case
    if (balance === -2) {
      const scoreRight = this._score(node.right.value);
      if (score > scoreRight) {
        return node.rotateLeft();
      } else {
        node.right = node.right.rotateRight();
        return node.rotateLeft();
      }
    }

    return node;
  }

  /**
   * Insert a value into the root element
   * @param value
   */
  insert(value) {
    this._root = this.insertNode(this._root, value);
    return this;
  }

  /**
   * Delete a node from a node tree
   * @param {Node} node
   * @param value
   * @return {Node}
   */
  deleteNode(node, value) {
    // Standard BST delete
    if (node instanceof NullNode) {
      return node;
    }

    const score = this._score(value);
    const scoreNode = this._score(node.value);

    if (score < scoreNode) {
      node.left = this.deleteNode(node.left, value);
    } else if (score > scoreNode) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // Do deletion
      if (node.right instanceof NullNode || node.left instanceof NullNode) {
        const tmp = node.right || node.left;
        if (!tmp) {
          // No child
          node = new NullNode();
        } else {
          node = tmp;
        }
      } else {
        const tmp = minValueNode(node.right);
        node.value = tmp.value;
        node.right.right = this.deleteNode(node.right, tmp.value);
      }
    }

    // If the tree had only one node then return
    if (node instanceof NullNode) {
      return node;
    }

    node.height = Math.max(node.left.height, node.right.height) + 1;

    const balance = getBalance(node);

    if (balance > 1) {
      if (getBalance(node.left) >= 0) {
        return node.rotateRight();
      } else {
        node.left = node.left.rotateLeft();
        return node.rotateRight();
      }
    }

    if (balance < -1) {
      if (getBalance(node.right) <= 0) {
        return node.rotateLeft();
      } else {
        node.right = node.right.rotateRight();
        return node.rotateLeft();
      }
    }

    return node;
  }

  /**
   * Delete a value from the root tree
   * @param value
   */
  delete(value) {
    this._root = this.deleteNode(this._root, value);
    return this;
  }

  /**
   * Find a node given a value
   * @param value
   * @return {Node|NullNode}
   */
  findNode(value) {
    let current = this._root;
    let score = this._score(value);

    let diff =  score - this._score(current.value);
    while(current instanceof Node && diff !== 0) {
      if (diff > 0) {
        current = current.right;
      } else {
        current = current.left;
      }
      if (current) {
        diff = score - this._score(current.value);
      }
    }

    return current;
  }

  /**
   * Create an Iterator in reverse in order (Been a search tree === return greater elements first)
   * @return {IterableIterator<{value: *, height: *}>}
   */
  *reverseInOrder() {
    // No elements in tree
    if (this._root instanceof NullNode) {
      return;
    }
    const stack = [];
    let current = this._root;

    while (current instanceof Node || stack.length > 0) {
      while (current instanceof Node) {
        stack.push(current);
        current = current.right;
      }

      current = stack.pop();

      yield {
        value: current.value,
        height: current.height,
      };

      current = current.left;
    }
  }

  /**
   * Util function tu print the respective elements in reverse in order
   */
  printReverseInOrder() {
    console.log(Array.from(this.reverseInOrder(), ({ value }) => value).join(' '));
  }
}
