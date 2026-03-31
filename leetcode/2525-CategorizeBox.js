/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
function categorizeBox(length, width, height, mass) {
  const isBulky = () => {
    let volume = length * width * height;
    const big_num = 10 ** 4;

    if (
      length >= big_num ||
      width >= big_num ||
      height >= big_num ||
      volume >= 10 ** 9
    ) {
      return true;
    }
    return false;
  };

  const isHeavy = () => {
    if (mass >= 100) {
      return true;
    }
    return false;
  };

  if (isBulky() && isHeavy()) {
    return "Both";
  } else if (isBulky() && !isHeavy()) {
    return "Bulky";
  } else if (isHeavy() && !isBulky()) {
    return "Heavy";
  } else {
    return "Neither";
  }
}
