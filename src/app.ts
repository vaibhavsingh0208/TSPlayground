function countPoints(points: number[][], queries: number[][]): number[] {
  const result: any = [];
  for (const query of queries) {
    let noOfPoints = 0;
    let radius = query[2];
    for (const point of points) {
      const distanceOfPoint = distance([query[0], query[1]], [point[0], point[1]]);
      console.log('distanceOfPoint', distanceOfPoint);
      if (distanceOfPoint <= radius) {
        noOfPoints++;
      }
    }
    result.push[noOfPoints];
  }
  return result;
}

function distance(point1: number[], point2: number[]): number {
  return Math.sqrt(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2) * 1.0);
}

const data = countPoints(
  [
    [1, 3],
    [3, 3],
    [5, 3],
    [2, 2]
  ],
  [
    [2, 3, 1],
    [4, 3, 1],
    [1, 1, 2]
  ]
);

console.log(data);
