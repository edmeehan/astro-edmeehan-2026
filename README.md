# Skele Design System

A modular design system built with Astro, featuring design tokens, components, and documentation.

## Project Structure

```
skele-astro/
├── packages/
│   ├── site/           # Documentation site
│   ├── library/        # Component library
│   ├── styles/         # Design tokens and CSS
│   └── components/     # Shared components
```

## Development Scripts

### Main Commands

- `npm run dev` - Run all dev servers with token watching
- `npm run build` - Build everything with token generation

### Site Commands

- `npm run dev:site` - Run site dev server with token watching
- `npm run dev:site:astro` - Run site dev server without token watching
- `npm run build:site` - Build site with token generation
- `npm run build:site:astro` - Build site without token generation

### Library Commands

- `npm run dev:library` - Run library dev server with token watching
- `npm run dev:library:astro` - Run library dev server without token watching
- `npm run build:library` - Build library with token generation
- `npm run build:library:astro` - Build library without token generation

### Token Commands

- `npm run build:tokens` - Build design tokens once
- `npm run dev:tokens` - Watch and rebuild tokens when files change

## Script Organization

The script naming follows a consistent pattern:

- Base commands with `:astro` suffix run without token processing
- Commands without the suffix handle token generation automatically
- Token scripts can be run independently when needed

## Design Tokens

Design tokens are automatically generated during development and build processes. Token definitions are stored in `packages/styles/tokens/` and compiled to CSS variables.

For more details, see the [Styles README](packages/styles/README.md).

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start development:
   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.