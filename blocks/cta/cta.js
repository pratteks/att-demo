// Purpose: Resolve authored CTA link from a reference-like field container.
const getCtaHref = (fieldNode) => {
  if (!(fieldNode instanceof Element)) {
    return '';
  }

  const anchor = fieldNode.querySelector('a');
  if (anchor?.href) {
    return anchor.href;
  }

  return fieldNode.textContent?.trim() || '';
};

// Purpose: Resolve CTA style token from display type text.
const getCtaStyle = (displayTypeValue) => {
  const normalized = String(displayTypeValue || '').trim().toLowerCase();
  if (normalized.includes('secondary')) {
    return 'secondary';
  }

  return 'primary';
};

// Purpose: Parse a CTA row into a renderable configuration object.
const parseCtaRow = (row) => {
  const cells = [...row.children];
  const displayType = cells[0]?.textContent?.trim() || '';
  const ctaLabel = cells[1]?.textContent?.trim() || '';
  const pageOrMediaLink = getCtaHref(cells[2] || null);
  const assetsLinks = getCtaHref(cells[3] || null);
  const externalLink = getCtaHref(cells[4] || null);
  const ctaLink = pageOrMediaLink || externalLink || assetsLinks || '#';
  const ctaStyle = getCtaStyle(displayType);
  console.log('cta: parsed row', {
    displayType,
    ctaLabel,
    pageOrMediaLink,
    assetsLinks,
    externalLink,
    ctaStyle,
    ctaLink,
    cellCount: cells.length,
  });

  return {
    displayType,
    ctaLabel,
    pageOrMediaLink,
    assetsLinks,
    externalLink,
    ctaLink,
    ctaStyle,
  };
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
  console.log('cta: decorate start', { rowCount: rows.length, block });
  const ctaConfigs = rows.map(parseCtaRow).filter((ctaConfig) => ctaConfig.ctaLabel);
  console.log('cta: filtered configs', ctaConfigs);
  const ctaWrapper = document.createElement('div');
  ctaWrapper.className = 'cta';

  ctaConfigs.forEach((ctaConfig) => {
    ctaWrapper.append(buildCtaButton(ctaConfig));
  });

  block.innerHTML = '';
  block.append(ctaWrapper);
  console.log('cta: decorate complete', {
    renderedCount: ctaWrapper.childElementCount,
  });
}
