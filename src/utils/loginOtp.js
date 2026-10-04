function isPhoneLastFourDigits(enteredCode, phoneNumber) {
  const code = enteredCode != null ? String(enteredCode).trim() : '';
  const phone = phoneNumber != null ? String(phoneNumber).trim() : '';

  return phone.length >= 4 && code === phone.slice(-4);
}

module.exports = {
  isPhoneLastFourDigits,
};
