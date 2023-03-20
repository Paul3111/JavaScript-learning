const isValidLength = (phoneNumber) => {
    const validLength = 11;
    if (phoneNumber.length == validLength) {
      return true;
    } else {
      return false;
    }
  };

  console.log(isValidLength('00'));
  console.log(isValidLength('00112233445'));
