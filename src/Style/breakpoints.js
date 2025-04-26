const tamanho = {
  xxs: "360px",
  xs: "460px",
  s: "576px",
  m: "768px",
  ml: "992px",
  l: "1160px",
};

const breakpoints = {
  xxs: `(max-width:${tamanho.xxs})`,
  xs: `(max-width:${tamanho.xs})`,
  s: `(max-width:${tamanho.s})`,
  m: `(max-width:${tamanho.m})`,
  ml: `(max-width:${tamanho.ml})`,
  l: `(max-width:${tamanho.l})`,
};

export default breakpoints;
