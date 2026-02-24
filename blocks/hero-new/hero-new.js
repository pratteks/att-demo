// Purpose: Define authored field order from the hero-new model for row parsing.
const MODEL_FIELD_ORDER = [
  'eyebrowVariation',
  'eyebrowText',
  'eyebrowDesktopFontSizeToken',
  'eyebrowTabletFontSizeToken',
  'eyebrowMobileFontSizeToken',
  'headingText',
  'headingDesktopFontSizeToken',
  'headingTabletFontSizeToken',
  'headingMobileFontSizeToken',
  'description',
  'legal',
  'desktopFullWidthImageBeginning',
  'desktopFullWidthImageBackgroundAndEnding',
  'tabletFullWidthImageBeginning',
  'tabletFullWidthImageBackgroundAndEnding',
  'mobileFullWidthImageBeginning',
  'mobileFullWidthImageBackgroundAndEnding',
  'mobileImageDisplaysBelowCopy',
  'enableVideoControls',
  'videoVariation',
  'themePlayIcon',
  'modalMediaLink',
  'themeColor',
  'timerMobileThemeColor',
  'layoutVariation',
  'heroHeightVariation',
  'customSizeTablet',
  'customSizeDesktop',
  'overlayColor',
  'globalPageOrMediaLink',
  'globalAssetsLinks',
  'globalExternalLinks',
  'globalNoFollow',
  'globalOpenNewWindow',
  'globalAnchorTo',
  'globalAnalyticsTitle',
  'overlaySectionColor',
  'overlayPosition',
  'overlayHeading',
  'overlayDescription',
  'overlayLegal',
  'tabletSmallImage',
  'desktopSmallImage',
  'mobileSmallImage',
];

// Purpose: Identify richtext fields that should map to the row first element child.
const RICH_TEXT_FIELDS = ['description', 'legal', 'overlayDescription', 'overlayLegal'];

// Purpose: Identify reference-like fields that should store the authored row node.
const REFERENCE_FIELDS = [
  'desktopFullWidthImageBeginning',
  'desktopFullWidthImageBackgroundAndEnding',
  'tabletFullWidthImageBeginning',
  'tabletFullWidthImageBackgroundAndEnding',
  'mobileFullWidthImageBeginning',
  'mobileFullWidthImageBackgroundAndEnding',
  'modalMediaLink',
  'globalPageOrMediaLink',
  'globalAssetsLinks',
  'globalExternalLinks',
  'tabletSmallImage',
  'desktopSmallImage',
  'mobileSmallImage',
];

// Purpose: Identify boolean fields that should parse text content as true or false.
const BOOLEAN_FIELDS = [
  'mobileImageDisplaysBelowCopy',
  'enableVideoControls',
  'globalNoFollow',
  'globalOpenNewWindow',
];

// Purpose: Identify numeric fields that should parse text content as numbers.
const NUMBER_FIELDS = ['customSizeTablet', 'customSizeDesktop'];

// Purpose: Group content fields for rendering and content behavior.
const CONTENT_FIELDS = [
  'eyebrowVariation',
  'eyebrowText',
  'eyebrowDesktopFontSizeToken',
  'eyebrowTabletFontSizeToken',
  'eyebrowMobileFontSizeToken',
  'headingText',
  'headingDesktopFontSizeToken',
  'headingTabletFontSizeToken',
  'headingMobileFontSizeToken',
  'description',
  'legal',
  'desktopFullWidthImageBeginning',
  'desktopFullWidthImageBackgroundAndEnding',
  'tabletFullWidthImageBeginning',
  'tabletFullWidthImageBackgroundAndEnding',
  'mobileFullWidthImageBeginning',
  'mobileFullWidthImageBackgroundAndEnding',
  'mobileImageDisplaysBelowCopy',
  'enableVideoControls',
  'videoVariation',
  'themePlayIcon',
  'modalMediaLink',
  'globalPageOrMediaLink',
  'globalAssetsLinks',
  'globalExternalLinks',
  'globalNoFollow',
  'globalOpenNewWindow',
  'globalAnchorTo',
  'globalAnalyticsTitle',
  'overlaySectionColor',
  'overlayPosition',
  'overlayHeading',
  'overlayDescription',
  'overlayLegal',
  'tabletSmallImage',
  'desktopSmallImage',
  'mobileSmallImage',
];

// Purpose: Group styling fields for block classes and style behaviors.
const STYLING_FIELDS = [
  'themeColor',
  'timerMobileThemeColor',
  'layoutVariation',
  'heroHeightVariation',
  'customSizeTablet',
  'customSizeDesktop',
  'overlayColor',
];

// Purpose: Parse a single authored row value by field type from the model.
const parseFieldValue = (fieldName, row) => {
  if (!row) {
    if (BOOLEAN_FIELDS.includes(fieldName)) {
      return false;
    }

    return '';
  }

  if (RICH_TEXT_FIELDS.includes(fieldName)) {
    return row.firstElementChild || null;
  }

  if (REFERENCE_FIELDS.includes(fieldName)) {
    return row;
  }

  const rawValue = row.textContent?.trim() || '';
  if (BOOLEAN_FIELDS.includes(fieldName)) {
    return rawValue.toLowerCase() === 'true';
  }

  if (NUMBER_FIELDS.includes(fieldName)) {
    if (!rawValue) {
      return '';
    }

    const parsedNumber = Number(rawValue);
    return Number.isNaN(parsedNumber) ? '' : parsedNumber;
  }

  return rawValue;
};

// Purpose: Build block-level config from authored rows using model field order.
const buildBlockConfig = (rows) => {
  const fields = {};

  MODEL_FIELD_ORDER.forEach((fieldName, index) => {
    fields[fieldName] = parseFieldValue(fieldName, rows[index]);
  });

  const content = {};
  CONTENT_FIELDS.forEach((fieldName) => {
    content[fieldName] = fields[fieldName];
  });

  const styling = {};
  STYLING_FIELDS.forEach((fieldName) => {
    styling[fieldName] = fields[fieldName];
  });

  return { fields, content, styling };
};

// Purpose: Resolve a media URL from a stored reference row node.
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

// Purpose: Build hero-new content markup from the parsed block config.
const buildHeroNewContent = (blockConfig) => {
  const heroNew = document.createElement('div');
  heroNew.className = 'hero-new';

  if (blockConfig.styling.themeColor) {
    heroNew.classList.add(blockConfig.styling.themeColor);
  }

  if (blockConfig.styling.layoutVariation) {
    heroNew.classList.add(blockConfig.styling.layoutVariation);
  }

  if (blockConfig.styling.heroHeightVariation) {
    heroNew.classList.add(blockConfig.styling.heroHeightVariation);
  }

  const backgroundFields = [
    'desktopFullWidthImageBeginning',
    'desktopFullWidthImageBackgroundAndEnding',
    'tabletFullWidthImageBeginning',
    'tabletFullWidthImageBackgroundAndEnding',
    'mobileFullWidthImageBeginning',
    'mobileFullWidthImageBackgroundAndEnding',
  ];
  const backgroundField = backgroundFields.find((fieldName) => blockConfig.content[fieldName]);
  const backgroundUrl = resolveReferenceUrl(blockConfig.content[backgroundField]);
  if (backgroundUrl) {
    heroNew.style.setProperty('--hero-new-background-image', `url(${backgroundUrl})`);
  }

  const content = document.createElement('div');
  content.className = 'hero-new-content';

  if (blockConfig.content.eyebrowText) {
    const eyebrow = document.createElement('p');
    eyebrow.className = 'hero-new-eyebrow';
    eyebrow.textContent = blockConfig.content.eyebrowText;
    content.append(eyebrow);
  }

  if (blockConfig.content.headingText) {
    const heading = document.createElement('h1');
    heading.className = 'hero-new-heading';
    heading.textContent = blockConfig.content.headingText;
    content.append(heading);
  }

  if (blockConfig.content.description instanceof Element) {
    blockConfig.content.description.classList.add('hero-new-description');
    content.append(blockConfig.content.description);
  }

  if (blockConfig.content.legal instanceof Element) {
    blockConfig.content.legal.classList.add('hero-new-legal');
    content.append(blockConfig.content.legal);
  }

  heroNew.append(content);
  return heroNew;
};

// Purpose: Apply a single DOM update pass from parsed block-level config.
const updateHeroNewDom = (block, blockConfig) => {
  block.innerHTML = '';
  block.append(buildHeroNewContent(blockConfig));
};

export default function decorate(block) {
  const rows = [...block.children];
  const blockConfig = buildBlockConfig(rows);
  console.log('hero-new block config', blockConfig);

  updateHeroNewDom(block, blockConfig);
}
