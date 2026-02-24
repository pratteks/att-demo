// Purpose: Resolve authored CTA link from a reference-like field container.
const getCtaHref = (fieldNode) => {
  if (!(fieldNode instanceof Element)) {
    return '#';
  }

  const anchor = fieldNode.querySelector('a');
  if (anchor?.href) {
    return anchor.href;
  }

  return fieldNode.textContent?.trim() || '#';
};

// Purpose: Parse a CTA row into a renderable configuration object.
const parseCtaRow = (row) => {
  const cells = [...row.children];
  const ctaLabel = cells[0]?.textContent?.trim() || '';
  const ctaLink = getCtaHref(cells[1] || null);
  const ctaStyle = cells[2]?.textContent?.trim() || 'primary';

  return { ctaLabel, ctaLink, ctaStyle };
};

// Purpose: Build CTA button element from authored configuration.
const buildCtaButton = (ctaConfig) => {
  const button = document.createElement('a');
  button.className = `cta-button cta-button-${ctaConfig.ctaStyle || 'primary'}`;
  button.href = ctaConfig.ctaLink || '#';
  button.textContent = ctaConfig.ctaLabel || 'Learn More';

  return button;
};

export default function decorate(block) {
  const rows = [...block.children];
  const ctaConfigs = rows.map(parseCtaRow).filter((ctaConfig) => ctaConfig.ctaLabel);
  const ctaWrapper = document.createElement('div');
  ctaWrapper.className = 'cta';

  ctaConfigs.forEach((ctaConfig) => {
    ctaWrapper.append(buildCtaButton(ctaConfig));
  });

  block.innerHTML = '';
  block.append(ctaWrapper);
}
