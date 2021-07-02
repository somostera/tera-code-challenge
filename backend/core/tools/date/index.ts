export async function parseDateYYYYMMDD(date: string): Promise<Date> {
  let dateArray = date.split("/");
  let dateString = "";
  for (let i = dateArray.length - 1; i >= 0; i--) {
    dateString += dateArray[i] + "/";
  }
  return new Date(dateString);
}
