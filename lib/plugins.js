const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const ResizePlugin = (setLoaded, setUpdatedSlides, selectedSlide) => {
  return (slider) => {
    const observer = new ResizeObserver(function () {
      slider.update();
      if (setUpdatedSlides) {
        setUpdatedSlides(slider.slides);
      }
      if (setLoaded) {
        setLoaded(true);
      }
    });

    slider.on("created", () => {
      observer.observe(slider.container);
    });
    slider.on("destroyed", () => {
      observer.unobserve(slider.container);
    });
  };
};

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function paginate (arr, size) {
  return arr.reduce((acc, val, i) => {
    let idx = Math.floor(i / size)
    let page = acc[idx] || (acc[idx] = [])
    page.push(val)

    return acc
  }, [])
}

export { formatter, ResizePlugin, convertToSlug, isEmpty, paginate };
