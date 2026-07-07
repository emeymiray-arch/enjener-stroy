export function renderLegalContent(content: string): React.ReactNode[] {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length === 0) return;
    elements.push(
      <ul key={key++} className="list-none space-y-2 pl-0">
        {listItems.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-px w-3 shrink-0 bg-gold/50" />
            <span>{item}</span>
          </li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      continue;
    }
    if (trimmed.startsWith('• ') || trimmed.startsWith('- ')) {
      listItems.push(trimmed.slice(2));
    } else {
      flushList();
      elements.push(
        <p key={key++} className={trimmed.endsWith(':') ? 'font-semibold text-ink' : 'text-ink-muted'}>
          {trimmed}
        </p>,
      );
    }
  }

  flushList();
  return elements;
}
