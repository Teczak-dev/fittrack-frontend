[← Powrót do spisu komponentów](../../components_storybook.md)

# Link

Source: `src/components/atoms/Link/Link.tsx`

Exports: `Link`, `NavigationLink`, `LocalLink`

Opis:
- Komponenty linków: `Link` używa `react-router` do nawigacji wewnętrznej, `LocalLink` renderuje zwykły `<a>`.

Props (wybrane):
- `text: string`, `url: string`, `className?: string`

Użycie:
```tsx
import { Link, LocalLink } from 'src/components/atoms/Link/Link';
<Link text="Home" url="/" />
<LocalLink text="External" url="https://example.com" />
```
