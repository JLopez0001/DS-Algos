/*
733. Flood Fill

An image is represented by an m x n integer grid image where image[i][j] represents 
the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill 
on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 
4-directionally to the starting pixel of the same color as the starting pixel, plus 
any pixels connected 4-directionally to those pixels (also with the same color), 
and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.
*/

function floodFill(image, sr, sc, newColor) {
  let current = image[sr][sc];
  let queue = [[sr, sc]];
  if (current === newColor) {
    return image;
  }

  while (queue.length > 0) {
    //Initiaalize a decontructed version of the queue
    const [r, c] = queue.shift();
    if (image[r][c] === current) {
      image[r][c] = newColor;

      if (r - 1 >= 0) queue.push([r - 1, c]);
      if (r + 1 < image.length) queue.push([r + 1, c]);
      if (c - 1 >= 0) queue.push([r, c - 1]);
      if (c + 1 < image[0].length) queue.push([r, c + 1]);
    }
  }

  return image;
}

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
