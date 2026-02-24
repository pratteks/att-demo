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

// Purpose: Apply styling classes and variables from styling fields.
const applyStyling = (heroNew, blockConfig) => {
  const classFieldNames = [
    'themeColor',
    'timerMobileThemeColor',
    'layoutVariation',
    'heroHeightVariation',
    'overlayColor',
  ];

  blockConfig.forEach((field) => {
    if (field.fieldType !== 'styling') {
      return;
    }

    if (!classFieldNames.includes(field.fieldName)) {
      return;
    }

    if (!field.fieldValue) {
      return;
    }

    heroNew.classList.add(field.fieldValue);
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

// Purpose: Apply background media from authored full-width image reference fields.
const applyBackgroundImage = (heroNew, blockConfig) => {
  const backgroundFields = [
    'desktopFullWidthImageBeginning',
    'desktopFullWidthImageBackgroundAndEnding',
    'tabletFullWidthImageBeginning',
    'tabletFullWidthImageBackgroundAndEnding',
    'mobileFullWidthImageBeginning',
    'mobileFullWidthImageBackgroundAndEnding',
  ];

  const backgroundField = backgroundFields.find(
    (fieldName) => getFieldValue(blockConfig, fieldName),
  );
  const backgroundReference = getFieldValue(blockConfig, backgroundField);
  const backgroundUrl = resolveReferenceUrl(backgroundReference);
  if (!backgroundUrl) {
    return;
  }

  heroNew.style.setProperty('--hero-new-background-image', `url(${backgroundUrl})`);
};

// Purpose: Build hero-new content markup from blockConfig field objects.
const buildHeroNewContent = (blockConfig) => {
  const heroNew = document.createElement('div');
  heroNew.className = 'hero-new';

  applyStyling(heroNew, blockConfig);
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

  heroNew.append(content);
  return heroNew;
};

// Purpose: Apply a single DOM update pass from parsed blockConfig.
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
