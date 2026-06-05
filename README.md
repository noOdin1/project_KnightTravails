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
| 4. Devise a strategy of moving the knight towards its destination.<br>                                                        | [done] :white_check_mark: |
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

<p style="line-height: 1.5;">
Making the knight move through the possible moves mapping is an easy strategy.<br>
Eventually through many steps the knight will arrived at the destination square.<br>
Here are the list of strategies that I have tested for the knights movements:<br>
&emsp;&ensp;1. Calculating the distance and angle of the start (eventually<br>
&emsp;&emsp;&ensp;becoming current position) with the destination position.<br>
&emsp;&ensp;2. Using the numbered squares and sort the possible moves according<br>
&emsp;&emsp;&ensp;to the value of the numbered squares and the destination<br>
&emsp;&emsp;&ensp;square.<br>
&emsp;&ensp;3. Use a combination of the 2 strategy listed above to shorten<br>
&emsp;&emsp;&ensp;the knights movement to reach its destination.<br>
The 3rd option is the one with the best solution and the one that is currently<br>
being used.<br>
</p>
