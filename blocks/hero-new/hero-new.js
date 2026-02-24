// Purpose: Define all model fields in authored row order with type and component metadata.
const MODEL_FIELD_ORDER = [
  {
    fieldName: 'eyebrowVariation',
    fieldType: 'content',
    fieldComponent: 'select',
  },
  {
    fieldName: 'eyebrowText',
    fieldType: 'content',
    fieldComponent: 'text',
  },
  {
    fieldName: 'eyebrowDesktopFontSizeToken',
    fieldType: 'content',
    fieldComponent: 'select',
  },
  {
    fieldName: 'eyebrowTabletFontSizeToken',
    fieldType: 'content',
    fieldComponent: 'select',
  },
  {
    fieldName: 'eyebrowMobileFontSizeToken',
    fieldType: 'content',
    fieldComponent: 'select',
  },
  {
    fieldName: 'headingText',
    fieldType: 'content',
    fieldComponent: 'text',
  },
  {
    fieldName: 'headingDesktopFontSizeToken',
    fieldType: 'content',
    fieldComponent: 'select',
  },
  {
    fieldName: 'headingTabletFontSizeToken',
    fieldType: 'content',
    fieldComponent: 'select',
  },
  {
    fieldName: 'headingMobileFontSizeToken',
    fieldType: 'content',
    fieldComponent: 'select',
  },
  {
    fieldName: 'description',
    fieldType: 'content',
    fieldComponent: 'rte',
  },
  {
    fieldName: 'legal',
    fieldType: 'content',
    fieldComponent: 'rte',
  },
  {
    fieldName: 'ctaLayout',
    fieldType: 'content',
    fieldComponent: 'select',
  },
  {
    fieldName: 'desktopFullWidthImageBeginning',
    fieldType: 'content',
    fieldComponent: 'reference',
  },
  {
    fieldName: 'desktopFullWidthImageBackgroundAndEnding',
    fieldType: 'content',
    fieldComponent: 'reference',
  },
  {
    fieldName: 'tabletFullWidthImageBeginning',
    fieldType: 'content',
    fieldComponent: 'reference',
  },
  {
    fieldName: 'tabletFullWidthImageBackgroundAndEnding',
    fieldType: 'content',
    fieldComponent: 'reference',
  },
  {
    fieldName: 'mobileFullWidthImageBeginning',
    fieldType: 'content',
    fieldComponent: 'reference',
  },
  {
    fieldName: 'mobileFullWidthImageBackgroundAndEnding',
    fieldType: 'content',
    fieldComponent: 'reference',
  },
  {
    fieldName: 'mobileImageDisplaysBelowCopy',
    fieldType: 'content',
    fieldComponent: 'boolean',
  },
  {
    fieldName: 'enableVideoControls',
    fieldType: 'content',
    fieldComponent: 'boolean',
  },
  {
    fieldName: 'videoVariation',
    fieldType: 'content',
    fieldComponent: 'select',
  },
  {
    fieldName: 'themePlayIcon',
    fieldType: 'content',
    fieldComponent: 'select',
  },
  {
    fieldName: 'modalMediaLink',
    fieldType: 'content',
    fieldComponent: 'aem-content',
  },
  {
    fieldName: 'themeColor',
    fieldType: 'styling',
    fieldComponent: 'select',
  },
  {
    fieldName: 'timerMobileThemeColor',
    fieldType: 'styling',
    fieldComponent: 'select',
  },
  {
    fieldName: 'layoutVariation',
    fieldType: 'styling',
    fieldComponent: 'select',
  },
  {
    fieldName: 'heroHeightVariation',
    fieldType: 'styling',
    fieldComponent: 'select',
  },
  {
    fieldName: 'customSizeTablet',
    fieldType: 'styling',
    fieldComponent: 'number',
  },
  {
    fieldName: 'customSizeDesktop',
    fieldType: 'styling',
    fieldComponent: 'number',
  },
  {
    fieldName: 'overlayColor',
    fieldType: 'styling',
    fieldComponent: 'select',
  },
  {
    fieldName: 'globalPageOrMediaLink',
    fieldType: 'content',
    fieldComponent: 'aem-content',
  },
  {
    fieldName: 'globalAssetsLinks',
    fieldType: 'content',
    fieldComponent: 'aem-content',
  },
  {
    fieldName: 'globalExternalLinks',
    fieldType: 'content',
    fieldComponent: 'aem-content',
  },
  {
    fieldName: 'globalNoFollow',
    fieldType: 'content',
    fieldComponent: 'boolean',
  },
  {
    fieldName: 'globalOpenNewWindow',
    fieldType: 'content',
    fieldComponent: 'boolean',
  },
  {
    fieldName: 'globalAnchorTo',
    fieldType: 'content',
    fieldComponent: 'select',
  },
  {
    fieldName: 'globalAnalyticsTitle',
    fieldType: 'content',
    fieldComponent: 'text',
  },
  {
    fieldName: 'overlaySectionColor',
    fieldType: 'content',
    fieldComponent: 'select',
  },
  {
    fieldName: 'overlayPosition',
    fieldType: 'content',
    fieldComponent: 'select',
  },
  {
    fieldName: 'overlayHeading',
    fieldType: 'content',
    fieldComponent: 'text',
  },
  {
    fieldName: 'overlayDescription',
    fieldType: 'content',
    fieldComponent: 'rte',
  },
  {
    fieldName: 'overlayLegal',
    fieldType: 'content',
    fieldComponent: 'rte',
  },
  {
    fieldName: 'tabletSmallImage',
    fieldType: 'content',
    fieldComponent: 'reference',
  },
  {
    fieldName: 'desktopSmallImage',
    fieldType: 'content',
    fieldComponent: 'reference',
  },
  {
    fieldName: 'mobileSmallImage',
    fieldType: 'content',
    fieldComponent: 'reference',
  },
];

// Purpose: Define repeatable CTA field order for rows authored after hero-new model fields.
const CTA_FIELD_ORDER = [
  {
    fieldName: 'displayType',
    fieldType: 'content',
    fieldComponent: 'select',
  },
  {
    fieldName: 'ctaLabel',
    fieldType: 'content',
    fieldComponent: 'text',
  },
  {
    fieldName: 'pageOrMediaLink',
    fieldType: 'content',
    fieldComponent: 'aem-content',
  },
  {
    fieldName: 'assetsLinks',
    fieldType: 'content',
    fieldComponent: 'aem-content',
  },
  {
    fieldName: 'externalLink',
    fieldType: 'content',
    fieldComponent: 'aem-content',
  },
  {
    fieldName: 'noFollow',
    fieldType: 'content',
    fieldComponent: 'boolean',
  },
  {
    fieldName: 'openNewWindow',
    fieldType: 'content',
    fieldComponent: 'boolean',
  },
  {
    fieldName: 'anchorTo',
    fieldType: 'content',
    fieldComponent: 'select',
  },
];

// Purpose: Parse a row value using the configured authored component type.
const parseFieldValue = (row, fieldComponent) => {
  if (!row) {
    if (fieldComponent === 'boolean') {
      return false;
    }

    return '';
  }

  if (fieldComponent === 'rte') {
    return row.firstElementChild || null;
  }

  if (fieldComponent === 'reference' || fieldComponent === 'aem-content') {
    return row;
  }

  const rawValue = row.textContent?.trim() || '';
  if (fieldComponent === 'boolean') {
    return rawValue.toLowerCase() === 'true';
  }

  if (fieldComponent === 'number') {
    if (!rawValue) {
      return '';
    }

    const parsedNumber = Number(rawValue);
    return Number.isNaN(parsedNumber) ? '' : parsedNumber;
  }

  return rawValue;
};

// Purpose: Build blockConfig as a list of model field objects with parsed authored values.
const buildBlockConfig = (rows) => MODEL_FIELD_ORDER.map((field, index) => ({
  ...field,
  fieldValue: parseFieldValue(rows[index], field.fieldComponent),
}));

// Purpose: Parse a CTA row into the same field object format used by blockConfig.
const parseCtaRow = (row) => {
  console.log('row', row.innerHTML);
  const hasDirectCells = row.children.length >= CTA_FIELD_ORDER.length;
  const nestedContainer = row.firstElementChild;
  const hasNestedCells = nestedContainer
    && nestedContainer.children
    && nestedContainer.children.length >= CTA_FIELD_ORDER.length;
  const cells = hasDirectCells
    ? [...row.children]
    : hasNestedCells
      ? [...nestedContainer.children]
      : [];
  const ctaFields = CTA_FIELD_ORDER.map((field, index) => ({
    ...field,
    fieldValue: parseFieldValue(cells[index], field.fieldComponent),
  }));
  console.log(ctaFields, 'ctaFields');

  return ctaFields;
};

// Purpose: Build repeatable CTA configs from authored rows after model field rows.
const buildCtaConfigs = (rows) => rows
  .map(parseCtaRow)
  .filter((ctaConfig) => ctaConfig);

// Purpose: Resolve a field object by name from the blockConfig list.
const getField = (blockConfig, fieldName) => (
  blockConfig.find((field) => field.fieldName === fieldName) || null
);

// Purpose: Resolve a field value by name from the blockConfig list.
const getFieldValue = (blockConfig, fieldName) => {
  const field = getField(blockConfig, fieldName);
  return field ? field.fieldValue : '';
};

// Purpose: Resolve authored media URL from a reference-like row object.
const resolveReferenceUrl = (referenceRow) => {
  if (!(referenceRow instanceof Element)) {
    return '';
  }

  const link = referenceRow.querySelector('a');
  if (link?.href) {
    return link.href;
  }

  const image = referenceRow.querySelector('img');
  if (image?.src) {
    return image.src;
  }

  return referenceRow.textContent?.trim() || '';
};

// Purpose: Resolve field value by name from a field object list.
const getListFieldValue = (fieldList, fieldName) => {
  const field = fieldList.find((listField) => listField.fieldName === fieldName);
  return field ? field.fieldValue : '';
};

const FONT_SIZE_LABEL_SUFFIX_MAP = {
  xxxs: 'xxxs',
  xxs: 'xxs',
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'l',
  xl: 'xl',
  xxl: 'xxl',
};

// Purpose: Resolve selected font token/label into a CSS variable reference value.
const getFontSizeValue = (selectedToken, viewport) => {
  const token = String(selectedToken || '').trim();
  if (!token || token.toLowerCase() === 'inherit') {
    return '';
  }

  if (token.startsWith('font-size-')) {
    return `var(--${token})`;
  }

  const normalizedLabel = token.toLowerCase();
  const suffix = FONT_SIZE_LABEL_SUFFIX_MAP[normalizedLabel];
  if (!suffix) {
    return '';
  }

  return `var(--font-size-${viewport}-${suffix})`;
};

// Purpose: Apply authored eyebrow and heading size selections across breakpoints.
const applyTypographySizing = (heroNew, blockConfig) => {
  const eyebrowTabletSelection = String(
    getFieldValue(blockConfig, 'eyebrowTabletFontSizeToken') || '',
  ).trim().toLowerCase();
  const eyebrowMobileSelection = String(
    getFieldValue(blockConfig, 'eyebrowMobileFontSizeToken') || '',
  ).trim().toLowerCase();
  const eyebrowDesktop = getFontSizeValue(
    getFieldValue(blockConfig, 'eyebrowDesktopFontSizeToken'),
    'desktop',
  );
  const eyebrowTablet = eyebrowTabletSelection === 'inherit'
    ? eyebrowDesktop
    : getFontSizeValue(eyebrowTabletSelection, 'tablet');
  const eyebrowMobile = eyebrowMobileSelection === 'inherit'
    ? (eyebrowTablet || eyebrowDesktop)
    : getFontSizeValue(eyebrowMobileSelection, 'mobile');

  const headingTabletSelection = String(
    getFieldValue(blockConfig, 'headingTabletFontSizeToken') || '',
  ).trim().toLowerCase();
  const headingMobileSelection = String(
    getFieldValue(blockConfig, 'headingMobileFontSizeToken') || '',
  ).trim().toLowerCase();
  const headingDesktop = getFontSizeValue(
    getFieldValue(blockConfig, 'headingDesktopFontSizeToken'),
    'desktop',
  );
  const headingTablet = headingTabletSelection === 'inherit'
    ? headingDesktop
    : getFontSizeValue(headingTabletSelection, 'tablet');
  const headingMobile = headingMobileSelection === 'inherit'
    ? (headingTablet || headingDesktop)
    : getFontSizeValue(headingMobileSelection, 'mobile');

  if (eyebrowDesktop) {
    heroNew.style.setProperty('--hero-new-eyebrow-size-desktop', eyebrowDesktop);
  }

  if (eyebrowTablet) {
    heroNew.style.setProperty('--hero-new-eyebrow-size-tablet', eyebrowTablet);
  }

  if (eyebrowMobile) {
    heroNew.style.setProperty('--hero-new-eyebrow-size-mobile', eyebrowMobile);
  }

  if (headingDesktop) {
    heroNew.style.setProperty('--hero-new-heading-size-desktop', headingDesktop);
  }

  if (headingTablet) {
    heroNew.style.setProperty('--hero-new-heading-size-tablet', headingTablet);
  }

  if (headingMobile) {
    heroNew.style.setProperty('--hero-new-heading-size-mobile', headingMobile);
  }
};

// Purpose: Resolve CTA style token from display type selection.
const resolveCtaStyle = (displayTypeValue) => {
  const normalized = String(displayTypeValue || '').trim().toLowerCase();
  if (normalized.includes('secondary')) {
    return 'secondary';
  }

  return 'primary';
};

// Purpose: Apply styling classes and variables from styling fields.
const applyStyling = (heroNew, blockConfig) => {
  blockConfig.forEach((field) => {
    if (field.fieldType !== 'styling') {
      return;
    }

    if (!field.fieldValue) {
      return;
    }

    heroNew.classList.add(`${field.fieldName}-${field.fieldValue}`);
  });

  const customSizeTablet = getFieldValue(blockConfig, 'customSizeTablet');
  if (customSizeTablet !== '') {
    heroNew.style.setProperty('--hero-new-custom-size-tablet', `${customSizeTablet}px`);
  }

  const customSizeDesktop = getFieldValue(blockConfig, 'customSizeDesktop');
  if (customSizeDesktop !== '') {
    heroNew.style.setProperty('--hero-new-custom-size-desktop', `${customSizeDesktop}px`);
  }
};

// Purpose: Resolve viewport background URLs with larger viewport fallback inheritance.
const getResponsiveBackgroundUrls = (blockConfig) => {
  const desktopUrl = resolveReferenceUrl(
    getFieldValue(blockConfig, 'desktopFullWidthImageBeginning'),
  );
  const tabletSource = resolveReferenceUrl(
    getFieldValue(blockConfig, 'tabletFullWidthImageBeginning'),
  );
  const mobileSource = resolveReferenceUrl(
    getFieldValue(blockConfig, 'mobileFullWidthImageBeginning'),
  );
  const tabletUrl = tabletSource || desktopUrl;
  const mobileUrl = mobileSource || tabletUrl || desktopUrl;

  return { desktopUrl, tabletUrl, mobileUrl };
};

// Purpose: Apply background media from Beginning image fields with viewport switching.
const applyBackgroundImage = (heroNew, blockConfig) => {
  const { desktopUrl, tabletUrl, mobileUrl } = getResponsiveBackgroundUrls(blockConfig);
  if (!desktopUrl && !tabletUrl && !mobileUrl) {
    return;
  }

  if (desktopUrl) {
    heroNew.style.setProperty('--hero-new-background-image-desktop', `url(${desktopUrl})`);
  }

  if (tabletUrl) {
    heroNew.style.setProperty('--hero-new-background-image-tablet', `url(${tabletUrl})`);
  }

  if (mobileUrl) {
    heroNew.style.setProperty('--hero-new-background-image-mobile', `url(${mobileUrl})`);
  }
};

// Purpose: Build CTA anchor element from parsed CTA field objects.
const buildCtaLink = (ctaConfig) => {
  console.log('cta config', ctaConfig);
  const ctaLabel = String(getListFieldValue(ctaConfig, 'ctaLabel') || '').trim();
  // if (!ctaLabel) {
  //   return null;
  // }

  const displayType = getListFieldValue(ctaConfig, 'displayType');
  const ctaStyle = resolveCtaStyle(displayType);
  const pageOrMediaLink = resolveReferenceUrl(getListFieldValue(ctaConfig, 'pageOrMediaLink'));
  const externalLink = resolveReferenceUrl(getListFieldValue(ctaConfig, 'externalLink'));
  const assetsLinks = resolveReferenceUrl(getListFieldValue(ctaConfig, 'assetsLinks'));
  const ctaLink = pageOrMediaLink || externalLink || assetsLinks || '#';
  const noFollow = Boolean(getListFieldValue(ctaConfig, 'noFollow'));
  const openNewWindow = Boolean(getListFieldValue(ctaConfig, 'openNewWindow'));
  const cta = document.createElement('a');
  cta.className = 'hero-new-cta-link';
  cta.classList.add(`hero-new-cta-link-${ctaStyle}`);
  cta.href = ctaLink;
  cta.textContent = ctaLabel;
  if (noFollow) {
    cta.rel = 'nofollow';
  }

  if (openNewWindow) {
    cta.target = '_blank';
    cta.rel = cta.rel ? `${cta.rel} noopener noreferrer` : 'noopener noreferrer';
  }

  return cta;
};

// Purpose: Build repeatable CTA group and place it below legal text.
const buildCtaGroup = (ctaConfigs) => {
  if (!ctaConfigs.length) {
    return null;
  }

  const ctaGroup = document.createElement('div');
  ctaGroup.className = 'hero-new-cta-group';
  ctaConfigs.forEach((ctaConfig) => {
    const cta = buildCtaLink(ctaConfig);
    console.log('cta created', cta);
    if (cta) {
      ctaGroup.append(cta);
    }
  });

  return ctaGroup.childElementCount ? ctaGroup : null;
};

// Purpose: Build hero-new content markup from blockConfig field objects.
const buildHeroNewContent = (blockConfig, ctaConfigs) => {
  const heroNew = document.createElement('div');
  heroNew.className = 'hero-new';

  applyStyling(heroNew, blockConfig);
  applyTypographySizing(heroNew, blockConfig);
  applyBackgroundImage(heroNew, blockConfig);

  const content = document.createElement('div');
  content.className = 'hero-new-content';

  const eyebrowText = getFieldValue(blockConfig, 'eyebrowText');
  if (eyebrowText) {
    const eyebrow = document.createElement('p');
    eyebrow.className = 'hero-new-eyebrow';
    eyebrow.textContent = eyebrowText;
    content.append(eyebrow);
  }

  const headingText = getFieldValue(blockConfig, 'headingText');
  if (headingText) {
    const heading = document.createElement('h1');
    heading.className = 'hero-new-heading';
    heading.textContent = headingText;
    content.append(heading);
  }

  const description = getFieldValue(blockConfig, 'description');
  if (description instanceof Element) {
    description.classList.add('hero-new-description');
    content.append(description);
  }

  const legal = getFieldValue(blockConfig, 'legal');
  if (legal instanceof Element) {
    legal.classList.add('hero-new-legal');
    content.append(legal);
  }

  const ctaGroup = buildCtaGroup(ctaConfigs);
  if (ctaGroup) {
    content.append(ctaGroup);
  }

  heroNew.append(content);
  return heroNew;
};

// Purpose: Apply a single DOM update pass from parsed blockConfig.
const updateHeroNewDom = (block, blockConfig, ctaConfigs) => {
  block.innerHTML = '';
  block.append(buildHeroNewContent(blockConfig, ctaConfigs));
};

export default function decorate(block) {
  const rows = [...block.children];
  const modelRows = rows.slice(0, MODEL_FIELD_ORDER.length);
  const ctaRows = rows.slice(MODEL_FIELD_ORDER.length);
  console.log('cta rows', ctaRows);
  const blockConfig = buildBlockConfig(modelRows);
  const ctaConfigs = buildCtaConfigs(ctaRows);

  updateHeroNewDom(block, blockConfig, ctaConfigs);
}
