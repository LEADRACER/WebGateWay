const TerminalSection = styled.div`
  background: ${theme.colors.grey900}; /* Using darker grey background */
  border: 1px solid ${theme.colors.borderSubtle};
  border-radius: 4px;
  overflow: hidden;
  max-width: 1000px;
  margin: 4rem auto;

  .terminal-header {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    background: ${theme.colors.grey800}; /* Using grey800 for header */
    border-bottom: 1px solid ${theme.colors.borderSubtle};
    gap: 0.5rem;
  }

  .terminal-title {
    flex: 1;
    text-align: center;
    color: ${theme.colors.textMuted};
    font-family: ${theme.fonts.mono};
    font-size: 0.85rem;
  }

  .terminal-body {
    padding: 1.5rem;
    font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
    font-size: 0.85rem;
    line-height: 1.8;
    overflow-x: auto;
    background: ${theme.colors.bgDeep}; /* Using bgDeep for terminal body */
    min-height: 200px;
  }
`