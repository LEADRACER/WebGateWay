const TerminalSection = styled.div`
  background: var(--bgDeep);
  border: 1px solid var(--borderSubtle);
  border-radius: 8px;
  overflow: hidden;
  max-width: 1000px;
  margin: 4rem auto;

  .terminal-header {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    background: var(--bgSecondary);
    border-bottom: 1px solid var(--borderSubtle);
    gap: 0.5rem;
  }

  .terminal-title {
    flex: 1;
    text-align: center;
    color: var(--textMuted);
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 0.85rem;
  }

  .terminal-body {
    padding: 1.5rem;
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 0.85rem;
    line-height: 1.8;
    overflow-x: auto;
    background: var(--bgDeep);
    min-height: 200px;
  }
`
