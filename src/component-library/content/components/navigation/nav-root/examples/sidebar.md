---
title: Sidebar Navigation
blocks:
  _bookshop_name: "navigation/nav-root"
  variant: "sidebar"
  navBlocks:
    - _bookshop_name: "navigation/nav-list"
      navBlocks:
        - _bookshop_name: "navigation/nav-item"
          href: "#"
          text: "Home"
        - _bookshop_name: "navigation/nav-item"
          href: "#"
          text: "About"
        - _bookshop_name: "navigation/nav-item"
          text: "Resources"
          navBlocks:
            - _bookshop_name: "navigation/nav-list"
              navBlocks:
                - _bookshop_name: "navigation/nav-item"
                  href: "#"
                  text: "Blog"
                - _bookshop_name: "navigation/nav-item"
                  href: "#"
                  text: "Docs"
        - _bookshop_name: "navigation/nav-item"
          text: "Help"
          navBlocks:
            - _bookshop_name: "navigation/nav-list"
              navBlocks:
                - _bookshop_name: "navigation/nav-item"
                  href: "#"
                  text: "FAQ"
                - _bookshop_name: "navigation/nav-item"
                  href: "#"
                  text: "Support"
                - _bookshop_name: "navigation/nav-item"
                  href: "#"
                  text: "Guides"
        - _bookshop_name: "navigation/nav-item"
          href: "#"
          text: "Contact"
---
