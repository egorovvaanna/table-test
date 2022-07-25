export const usePagination = (pages: number[], currentPage: number) => {
  const oneThree = currentPage <= 3;
  const threeToLast = currentPage > 3 && currentPage < pages[pages.length - 1];
  const threeLast = currentPage > pages[pages.length - 4];
  const notFirst3 = threeToLast || threeLast;

  let allPages: number[] = [];

  if (oneThree) {
    allPages = pages.filter((el) => el <= 4);
  }
  if (threeToLast) {
    allPages = pages.filter(
      (el) =>
        el === currentPage - 1 || el === currentPage || el === currentPage + 1
    );
  }
  if (threeLast) {
    allPages = pages.filter((el) => el > pages[pages.length - 4]);
  }
  return { allPages, notFirst3, threeLast };
};
