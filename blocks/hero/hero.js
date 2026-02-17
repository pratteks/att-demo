function buildHeroContent(fieldMap, contentFields) {
  console.log('field map', fieldMap);
  const hero = document.createElement('div');
  hero.className = 'hero';

  const imageFieldOrder = [
    'desktopFullWidthImageBackgroundAndEnding',
    'desktopFullWidthImageBeginning',
    'tabletFullWidthImageBackgroundAndEnding',
    'tabletFullWidthImageBeginning',
    'mobileFullWidthImageBackgroundAndEnding',
    'mobileFullWidthImageBeginning',
  ];
  const imageField = imageFieldOrder.find((name) => contentFields.includes(name) && fieldMap[name]);
  if (imageField) {
    const bg = document.createElement('div');
    bg.className = 'hero-bg';
    bg.style.backgroundImage = `url(${fieldMap[imageField]})`;
    hero.append(bg);
  }

  const isVideoEnabled = String(fieldMap.videoEnable).trim().toLowerCase() === 'true';
  if (isVideoEnabled && fieldMap.videoVariation === 'show-video-in-modal' && fieldMap.modalMediaLink) {
    const video = document.createElement('video');
    video.className = 'hero-video';
    video.src = fieldMap.modalMediaLink;
    video.setAttribute('playsinline', '');
    video.setAttribute('muted', '');
    video.setAttribute('loop', '');
    video.setAttribute('autoplay', '');
    video.setAttribute('preload', 'metadata');
    hero.append(video);

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'hero-video-toggle';
    toggle.classList.add(`hero-video-toggle-${fieldMap.themePlayIcon || 'light'}`);
    toggle.textContent = 'Pause';
    toggle.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        toggle.textContent = 'Pause';
      } else {
        video.pause();
        toggle.textContent = 'Play';
      }
    });
    hero.append(toggle);
  }

  const content = document.createElement('div');
  content.className = 'hero-content';

  console.log('eyebrow variation', fieldMap.eyebrowVariation);

  if (fieldMap.eyebrowVariation === 'Text') {
    if (fieldMap.eyebrowText) {
      const eyebrow = document.createElement('p');
      eyebrow.className = 'hero-eyebrow';
      if (fieldMap.eyebrowDesktopSize) {
        eyebrow.classList.add(`eyebrow-desktop-${fieldMap.eyebrowDesktopSize}`);
      }
      if (fieldMap.eyebrowTabletSize) {
        eyebrow.classList.add(`eyebrow-tablet-${fieldMap.eyebrowTabletSize}`);
      }
      if (fieldMap.eyebrowMobileSize) {
        eyebrow.classList.add(`eyebrow-mobile-${fieldMap.eyebrowMobileSize}`);
      }
      eyebrow.textContent = fieldMap.eyebrowText;
      content.append(eyebrow);
    }

    if (fieldMap.headingText) {
      const heading = document.createElement('h1');
      heading.className = 'hero-heading';
      if (fieldMap.headingDesktopSize) {
        heading.classList.add(`heading-desktop-${fieldMap.headingDesktopSize}`);
      }
      if (fieldMap.headingTabletSize) {
        heading.classList.add(`heading-tablet-${fieldMap.headingTabletSize}`);
      }
      if (fieldMap.headingMobileSize) {
        heading.classList.add(`heading-mobile-${fieldMap.headingMobileSize}`);
      }
      heading.textContent = fieldMap.headingText;
      content.append(heading);
    }

    if (fieldMap.description) {
      const description = fieldMap.description instanceof Element
        ? fieldMap.description
        : document.createElement('div');
      if (!(description instanceof Element)) {
        description.textContent = fieldMap.description;
      }
      description.classList.add('hero-description');
      content.append(description);
    }

    if (fieldMap.legal) {
      const legal = fieldMap.legal instanceof Element
        ? fieldMap.legal
        : document.createElement('div');
      if (!(legal instanceof Element)) {
        legal.textContent = fieldMap.legal;
      }
      legal.classList.add('hero-legal');
      content.append(legal);
    }
  }

  hero.append(content);
  return hero;
}

export default function decorate(block) {
  const fieldNames = [
    'general',
    'layout',
    'themeColor',
    'timerMobileThemeColor',
    'layoutVariation',
    'heightHeroVariation',
    'customSizeTablet',
    'customSizeDesktop',
    'overlayColor',
    'content',
    'eyebrowVariation',
    'eyebrow',
    'eyebrowText',
    'eyebrowDesktopSize',
    'eyebrowTabletSize',
    'eyebrowMobileSize',
    'heading',
    'headingText',
    'headingDesktopSize',
    'headingTabletSize',
    'headingMobileSize',
    'description',
    'legal',
    'desktopFullWidthImageBeginning',
    'desktopFullWidthImageBackgroundAndEnding',
    'tabletFullWidthImageBeginning',
    'tabletFullWidthImageBackgroundAndEnding',
    'mobileFullWidthImageBeginning',
    'mobileFullWidthImageBackgroundAndEnding',
    'mobileImageDisplaysBelowCopy',
    'videoEnable',
    'videoVariation',
    'modalMediaLink',
    'themePlayIcon',
    'ctaDetails',
    'ctaLayout',
    'globalHyperlinks',
    'globalPageOrMediaLink',
    'globalAssetsLinks',
    'globalExternalLinks',
    'globalNoFollow',
    'globalOpenNewWindow',
    'globalAnchorTo',
    'globalAnalyticsTitle',
    'padding',
    'mobilePaddingLeft',
    'mobilePaddingRight',
    'tabletPaddingLeft',
    'tabletPaddingRight',
    'desktopPaddingLeft',
    'desktopPaddingRight',
    'mobilePaddingTop',
    'mobilePaddingBottom',
    'tabletPaddingTop',
    'tabletPaddingBottom',
    'desktopPaddingTop',
    'desktopPaddingBottom',
    'margin',
    'mobileMarginTop',
    'mobileMarginBottom',
    'tabletMarginTop',
    'tabletMarginBottom',
    'desktopMarginTop',
    'desktopMarginBottom',
    'overlay',
    'overlaySection',
    'overlaySectionColor',
    'sectionOverlayPosition',
    'overlaySectionHeading',
    'overlaySectionDescription',
    'overlaySectionLegal',
    'tabletSmallImage',
    'desktopSmallImage',
    'mobileSmallImage',
  ];

  const contentFields = [
    'eyebrowVariation',
    'eyebrowText',
    'eyebrowDesktopSize',
    'eyebrowTabletSize',
    'eyebrowMobileSize',
    'headingText',
    'headingDesktopSize',
    'headingTabletSize',
    'headingMobileSize',
    'description',
    'legal',
    'desktopFullWidthImageBeginning',
    'desktopFullWidthImageBackgroundAndEnding',
    'tabletFullWidthImageBeginning',
    'tabletFullWidthImageBackgroundAndEnding',
    'mobileFullWidthImageBeginning',
    'mobileFullWidthImageBackgroundAndEnding',
    'mobileImageDisplaysBelowCopy',
    'videoEnable',
    'videoVariation',
    'modalMediaLink',
    'themePlayIcon',
    'ctaLayout',
    'globalPageOrMediaLink',
    'globalAssetsLinks',
    'globalExternalLinks',
    'globalNoFollow',
    'globalOpenNewWindow',
    'globalAnchorTo',
    'globalAnalyticsTitle',
    'overlaySectionHeading',
    'overlaySectionDescription',
    'overlaySectionLegal',
    'tabletSmallImage',
    'desktopSmallImage',
    'mobileSmallImage',
  ];

  const styleFields = [
    'themeColor',
    'timerMobileThemeColor',
    'layoutVariation',
    'heightHeroVariation',
    'customSizeTablet',
    'customSizeDesktop',
    'overlayColor',
    'ctaDetails',
    'globalHyperlinks',
    'mobilePaddingLeft',
    'mobilePaddingRight',
    'tabletPaddingLeft',
    'tabletPaddingRight',
    'desktopPaddingLeft',
    'desktopPaddingRight',
    'mobilePaddingTop',
    'mobilePaddingBottom',
    'tabletPaddingTop',
    'tabletPaddingBottom',
    'desktopPaddingTop',
    'desktopPaddingBottom',
    'mobileMarginTop',
    'mobileMarginBottom',
    'tabletMarginTop',
    'tabletMarginBottom',
    'desktopMarginTop',
    'desktopMarginBottom',
    'overlaySectionColor',
    'sectionOverlayPosition',
  ];

  const children = [...block.children];
  const fieldMap = {};
  fieldNames.forEach((name, index) => {
    const child = children[index];
    if (!child) {
      fieldMap[name] = '';
      return;
    }

    if (['description', 'legal', 'overlaySectionDescription', 'overlaySectionLegal'].includes(name)) {
      fieldMap[name] = child.firstElementChild || null;
      return;
    }

    fieldMap[name] = child.textContent?.trim() || '';
  });

  const toClassToken = (value) => {
    const token = String(value).trim().toLowerCase().replace(/\s+/g, '-')
      .replace(/[^a-z0-9-_]/g, '-');
    return /^[0-9]/.test(token) ? `v-${token}` : token;
  };

  const toCssSize = (value) => {
    const trimmed = String(value).trim();
    if (!trimmed) return '';
    return /^[0-9.]+$/.test(trimmed) ? `${trimmed}px` : trimmed;
  };

  styleFields.forEach((name) => {
    const value = fieldMap[name];
    if (!value) return;
    block.classList.add(`${name}-${toClassToken(value)}`);
  });

  if (fieldMap.customSizeTablet) {
    block.style.setProperty('--hero-custom-height-tablet', toCssSize(fieldMap.customSizeTablet));
  }

  if (fieldMap.customSizeDesktop) {
    block.style.setProperty('--hero-custom-height-desktop', toCssSize(fieldMap.customSizeDesktop));
  }

  const hero = buildHeroContent(fieldMap, contentFields);
  block.innerHTML = '';
  block.append(hero);
}
