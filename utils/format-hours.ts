export function formatHours(hours: number) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "unit",
    unit: "hour",
    unitDisplay: "long",
  });

  return formatter.format(hours);
}
