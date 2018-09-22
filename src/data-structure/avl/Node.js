export class NullNode {
  get height() {
    return 0;
  }

}

/**
 * @typedef {Object} Node
 * @property {anything} value
 * @property {number} height
 * @property {Node} left
 * @property {Node} right
 */
export default class Node {
  constructor(value, height = 1, left = new NullNode(), right = new NullNode()) {
    this.value = value;
    this.height = height;
    this.left = left;
    this.right = right;
  }

  rotateRight() {
    const root = this.left;
    const left = root.right;

    // Perform rotation
    root.right = this;
    this.left = left;

    // Update heights
    this.height = Math.max(this.left.height, this.right.height) + 1;
    root.height = Math.max(root.left.height, this.height) + 1;

    // Return new root
    return root;
  }


  // A utility function to left rotate subtree rooted with x
  // See the diagram given above.
  rotateLeft() {
    const root = this.right;
    const right = root.left;

    // Perform rotation
    root.left = this;
    this.right = right;

    //  Update heights
    this.height = Math.max(this.left.height, this.right.height) + 1;
    root.height = Math.max(this.height, root.right.height) + 1;

    // Return new root
    return root;
  }
}
