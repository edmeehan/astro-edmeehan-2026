---
_schema: default
title: test custom sections
pageSections:
  - _component: page-sections/builders/custom-section
    label: ''
    contentSections:
      - _component: building-blocks/wrappers/accordion
        label: asd
        items:
          - _component: building-blocks/wrappers/accordion/accordion-item
            title: asd
            contentSections:
              - _component: building-blocks/core-elements/text
                text: My text goes here.
                alignX: start
          - _component: building-blocks/wrappers/accordion/accordion-item
            title: asd
            contentSections:
              - _component: building-blocks/core-elements/text
                text: My text goes here.
                alignX: start
          - _component: building-blocks/wrappers/accordion/accordion-item
            title: asd
            contentSections:
              - _component: building-blocks/core-elements/text
                text: My text goes here.
                alignX: start
        openFirst: true
        singleOpen: false
      - _component: building-blocks/wrappers/button-group
        label:
        buttonSections:
          - _component: building-blocks/core-elements/button
            text: My Button
            link: ''
            iconName: ''
            iconPosition: before
            hideText: false
            variant: secondary
            size: lg
          - _component: building-blocks/core-elements/button
            text: My Button
            link: ''
            iconName: ''
            iconPosition: before
            hideText: false
            variant: primary
            size: md
        direction: column
        alignX: center
      - _component: building-blocks/core-elements/counter
        number: 99
        prefix: '%'
        suffix: t
        alignX: center
        size: 4xl
      - _component: building-blocks/core-elements/heading
        text: My Heading
        level: h2
        size: default
        alignX: start
        iconName:
        iconPosition: before
      - _component: building-blocks/wrappers/card
        label:
        contentSections:
          - _component: building-blocks/core-elements/heading
            text: 'My Headingqwe '
            level: h2
            size: default
            alignX: start
            iconName:
            iconPosition: before
          - _component: building-blocks/core-elements/counter
            number: 5
            prefix: 'Every week I get '
            suffix: ' dollars pocket money'
            alignX: center
            size: 2xl
        maxContentWidth:
        paddingHorizontal: sm
        paddingVertical: sm
        colorScheme:
        backgroundColor: base
        backgroundImage:
          source:
          alt:
          positionVertical: top
          positionHorizontal: center
        link:
        rounded: false
        border: false
        showBeforeAfter: false
        beforeContentSections: []
        afterContentSections: []
      - _component: building-blocks/core-elements/definition-list
        items:
          - _component: building-blocks/core-elements/definition-list/definition-list-item
            title: What's this?
            text: Who knows.
          - _component: building-blocks/core-elements/definition-list/definition-list-item
            title: What's this?
            text: Who knows.
          - _component: building-blocks/core-elements/definition-list/definition-list-item
            title: What's this?
            text: Who knows.
          - _component: building-blocks/core-elements/definition-list/definition-list-item
            title: What's this?
            text: Who knows.
        alignX: start
      - _component: building-blocks/core-elements/divider
        paddingVertical: lg
      - _component: building-blocks/core-elements/embed
        source: >-
          https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1372.6620524183181!2d170.33341713890303!3d-45.94684064277149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa82c02d1a756cd97%3A0x44fe11e513ff4adb!2sBrighton%20Beach!5e1!3m2!1sen!2sus!4v1752859116638!5m2!1sen!2sus
        title: ''
        aspectRatio: widescreen
      - _component: building-blocks/forms/form
        action: ./
        formBlocks: []
      - _component: building-blocks/wrappers/grid
        label: ''
        layout: center
        minItemWidth: 280
        maxItemWidth: 400
        items: []
        gap: md
      - _component: building-blocks/core-elements/icon
        name: social/bluesky
        size: lg
        color: default
        background: true
        alignX: start
      - _component: building-blocks/core-elements/image
        source: /src/assets/images/screenshot-2025-12-09-at-10-16-19-am.png
        alt: ''
        rounded: false
        aspectRatio: square
        positionVertical: center
        positionHorizontal: left
        priority: false
      - _component: building-blocks/core-elements/simple-text
        text: 'My text goes here. And here and here and '
        alignX: center
        size: default
      - _component: building-blocks/core-elements/spacer
        size: 3xl
      - _component: building-blocks/wrappers/split
        label: ''
        firstColumnContentSections:
          - _component: building-blocks/core-elements/simple-text
            text: My text goes here.
            alignX: start
            size: default
        secondColumnContentSections:
          - _component: building-blocks/core-elements/heading
            text: My Heading
            level: h2
            size: default
            alignX: start
            iconName:
            iconPosition: before
        distributionMode: half
        fixedWidth:
        minSplitWidth: 760
        verticalAlignment: center
        reverse: false
        gap: lg
      - _component: building-blocks/core-elements/testimonial
        text: My testimonial text.
        authorName: Charlie Parker
        authorDescription: Agent
        authorImage: /src/assets/images/component-library/profile4.jpg
        alignX: start
    maxContentWidth: 2xl
    paddingHorizontal: md
    paddingVertical: md
    colorScheme:
    backgroundColor: base
    backgroundImage:
      source: ''
      alt: ''
      positionVertical: top
      positionHorizontal: center
    rounded: false
---
