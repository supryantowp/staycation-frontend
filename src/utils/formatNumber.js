export default function numberFormat(number) {
  const fmtNumber = new Intl.NumberFormat("id-ID");
  return fmtNumber.format(number);
}
