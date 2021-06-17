public class BSTNode {
  public int left_size = 0;
  public BSTNode  left;
  public BSTNode  right;
  public int data = 0;
  public BSTNode (int d) {
    data = d; }

  public void insert(int d) {
    if (d <= data) {
      if (left != null) {
        left.insert(d);
      } else {
        left = new BSTNode(d);
      }
      left_size++;
    } else {
      if (right != null) {
        right.insert(d);
      } else {
        right = new BSTNode(d);
      }
    }
  }
