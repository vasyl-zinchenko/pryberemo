const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("enter");
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  }
);

export default {
  bind(el) {
    el.classList.add("before-enter");
    animatedScrollObserver.observe(el);
  },
};

// const animatedScrollObserver = new IntersectionObserver(
//   (entries, animatedScrollObserver) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("enter");
//         animatedScrollObserver.unobserve(entry.target);
//       }
//     });
//   }
// );

// let counter = 0;

// export default {
//   mounted(el) {
//     el.classList.add("before-enter");
//     el.dataset.index = counter.toString();
//     counter++;

//     animatedScrollObserver.observe(el);
//   },
// };
