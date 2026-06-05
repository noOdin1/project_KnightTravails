<h1>Project Knight Travails - TOP JS Path 85%</h1>

<p style="line-height: 1.5;">
This project focuses on the concepts of using graph theory to solve some of the<br>
computing problems. The project does not require a full representation of the<br>
graph but it is best to use concepts from graph mapping for the knight as it<br>
moves from its starting position to the destination position.<br>
</p>
<p style="line-height: 1.5;">
The following are my designs for this project:

| Designs                                                                                                            |          status           |
| ----------------------------------------------------------------------------------------------------------------------------- | :-----------------------: |
| 1. Create an adjacency matrix for knight moves for all squares.<br>                                                           | [done] :white_check_mark: |
| 2. Create a Binary Seach Tree from the adjacency matrix created above.<br>                                                    | [done] :white_check_mark: |
| 3. Create a chessboard equivalent using array.<br>                                                                            | [done] :white_check_mark: |
</p>

<p style="line-height: 1.5;">
The following image is a representation of the chessboard using 8x8 array.<br>
<img src="knight_travails_mapped_board.png" alt="array representation of chessboard"><br>
Since arrays are created starting from a top left corner of this image, therefore<br>
the top left is [0, 0], number 72 on this image.<br>

</p>

<p style="line-height: 1.5;">
The following is the adjacency matrix:<br>
<img src="knight_travails_adjacency_matrix.png" alt="adjacency matrix"><br>
Every square is mapped to possible knight's move. This map starts from the lowest<br>
number, 1 (which happens to be [7, 0]). This mapping process continues until it<br>
reaches square 79 (or [0, 7]). Each of the adjacent matrix will be a node in a<br>
linked list. The head of the node will be the originating square number.<br>
Since the process of creating the adjacency matrix follows the numbering on the<br>
mapped array, therefore the resulting array of linked list is sorted.<br>
</p>

<p style="line-height: 1.5;">
The following is the binary search tree of the adjacency matrix:<br>
<img src="knight_travails_mapped_moves.png" alt="binary search tree"><br>
Using a Binary Search Tree to store all the mapped moves would reduce the search<br>
time for each node by O(log O).
</p>
