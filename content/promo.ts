// Lopende actie. Zet `active` op false zodra de actie stopt; de tekst
// verdwijnt dan uit de hero-regel en de badge bij de tarieven, en de tekst
// bij de tarieven valt terug op het normale inschrijfgeld.
export const promo = {
  active: true,
  /** Badge bij de tarieven. */
  label: "Nu zonder inschrijfgeld (scheelt 15 euro)",
  /** Korte variant voor de info-regel in de hero. */
  heroLabel: "Geen inschrijfgeld (scheelt 15 euro)",
  /** Normaal eenmalig inschrijfgeld in euro's. */
  standardFee: "15",
};
