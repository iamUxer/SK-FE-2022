import { Button, TiltCardContainer } from 'components';
import { useTheme } from 'contexts/theme';

export default function DomPage() {
  const { theme, currentTheme, setTheme } = useTheme();

  return (
    <div
      id="domPage"
      style={{
        background: theme.bg,
        color: theme.fg,
        minHeight: '100vh',
      }}
    >
      <TiltCardContainer />
      <Button
        buttonProps={{
          onClick: () => {
            setTheme(currentTheme.includes('light') ? 'dark' : 'light');
          },
        }}
      >
        change theme
      </Button>
    </div>
  );
}
