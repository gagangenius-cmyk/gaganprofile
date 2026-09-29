export const palette = [
  { fg: "#4f46e5", bg: "#eef0fe" }, // indigo
  { fg: "#d97706", bg: "#fef3e2" }, // amber
  { fg: "#0d9488", bg: "#e6f7f5" }, // teal
  { fg: "#e11d48", bg: "#fde8ec" }, // rose
  { fg: "#0284c7", bg: "#e3f2fc" }, // sky
  { fg: "#7c3aed", bg: "#f2ecfd" }, // violet
];

export function paletteAt(index: number) {
  return palette[index % palette.length];
}
