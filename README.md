# Rohan Gupta - Portfolio

A creative, editorial-style personal portfolio website for Rohan Gupta (Mobile SDK / Platform Engineer).

## Features

- **Editorial Design**: Minimalist layout with "Chapter" like sections.
- **WebGL Visualization**: Generative system graph that reacts to scroll state.
- **Performance**: Mobile-first optimization, zero-bloat animation stack.
- **Stack**: Next.js 14, Tailwind CSS, TypeScript, React Three Fiber.

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run logic server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## Customization

- **Content**: Edit `lib/content.ts` to update text, metrics, and links.
- **Styling**: `app/globals.css` contains the CSS variables for the color palette.
- **WebGL**: `components/canvas/GenerativeGraph.tsx` contains the logic for the node system.

## License

MIT
