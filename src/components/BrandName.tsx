type BrandNameProps = {
  product?: "civil" | "structures";
  uppercase?: boolean;
  allowWrap?: boolean;
  inverse?: boolean;
};

export function BrandName({ product = "civil", uppercase = false, allowWrap = false, inverse = false }: BrandNameProps) {
  const name = product === "civil" ? "Civil" : "Structures";

  return (
    <span className={`brand-name${inverse ? " brand-name-inverse" : ""}${allowWrap ? "" : " whitespace-nowrap"}`}>
      {uppercase ? "OPEN" : "Open"}<span className="brand-suffix">//{allowWrap && <wbr />}{uppercase ? name.toUpperCase() : name}</span>
    </span>
  );
}
