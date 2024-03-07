export function sortHealth(heroes) {
  return heroes.slice().sort((a, b) => b.health - a.health);
}