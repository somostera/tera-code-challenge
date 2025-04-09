export function pluralize(count: number, singular: string, plural: string) {
  const pluralRules = new Intl.PluralRules("pt-BR");
  const category = pluralRules.select(count);
  return category === "one" ? `${singular}` : `${plural}`;
}
