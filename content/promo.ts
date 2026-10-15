// Lopende actie. Zet `active` op false zodra de actie stopt; de badge
// verdwijnt dan uit de hero en de tarieven en de tekst bij de tarieven
// valt terug op het normale inschrijfgeld.
export const promo = {
  active: true,
  label: "Nu zonder inschrijfgeld (scheelt 15 euro)",
  /** Normaal eenmalig inschrijfgeld in euro's. */
  standardFee: "15",
};
