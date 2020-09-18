//Java Solution

class Solution {
    int result;
    public int maxPathSum(TreeNode root) {
        result = Integer.MIN_VALUE;
        dfs(root);
        
        return result;
    }
    
    public int dfs(TreeNode node) {
        if (node == null) {
            return 0;
        }
        
        int left = Math.max(dfs(node.left), 0);
        int right = Math.max(dfs(node.right), 0);
        
        result = Math.max(result, left + right + node.val);
        
        return Math.max(left, right) + node.val;
    }
}