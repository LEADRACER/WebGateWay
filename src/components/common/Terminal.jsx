import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Terminal = ({ commands = [], autoRun = true }) => {
  const [lines, setLines] = useState([])
  const [currentLine, setCurrentLine] = useState(0)
  const terminalRef = useRef(null)

  const defaultCommands = [
    { type: 'input', text: 'sentinals status --all' },
    { type: 'output', text: 'System Status: OPERATIONAL', color: 'success' },
    { type: 'output', text: 'Active Threats: 0' },
    { type: 'output', text: 'Nodes Online: 247/247' },
    { type: 'comment', text: '# Last scan: 2 minutes ago' },
    { type: 'input', text: 'sentinals scan --deep --target=production' },
    { type: 'output', text: '[+] Initiating deep scan...' },
    { type: 'output', text: '[+] Scanning 12,450 endpoints...' },
    { type: 'success', text: '[+] No critical vulnerabilities found' },
    { type: 'warning', text: '[!] 3 medium severity issues detected' },
    { type: 'comment', text: '# Run \'sentinals remediate --auto\' to fix' }
  ]

  useEffect(() => {
    const cmds = commands.length > 0 ? commands : defaultCommands
    
    if (autoRun) {
      const timer = setTimeout(() => {
        setLines(cmds.slice(0, 1))
        setCurrentLine(1)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [commands, autoRun])

  useEffect(() => {
    if (currentLine < (commands.length > 0 ? commands.length : defaultCommands.length)) {
      const timer = setTimeout(() => {
        const cmds = commands.length > 0 ? commands : defaultCommands
        setLines(cmds.slice(0, currentLine + 1))
        setCurrentLine(prev => prev + 1)
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [currentLine, commands])

  const getLineClass = (type) => {
    switch (type) {
      case 'input': return 'terminal-line visible'
      case 'output': return 'terminal-line terminal-output visible'
      case 'success': return 'terminal-line terminal-success visible'
      case 'warning': return 'terminal-line terminal-warning visible'
      case 'comment': return 'terminal-line terminal-comment visible'
      default: return 'terminal-line visible'
    }
  }

  const getLineContent = (line) => {
    if (line.type === 'input') {
      return (
        <>
          <span className="terminal-prompt">$</span>
          <span className="terminal-cmd">{line.text}</span>
        </>
      )
    }
    return <span className="terminal-cmd">{line.text}</span>
  }

  return (
    <TerminalSection>
      <div className="terminal-header">
        <div className="terminal-dot red"></div>
        <div className="terminal-dot yellow"></div>
        <div className="terminal-dot green"></div>
        <div className="terminal-title">sentinals@cyber:~</div>
      </div>
      <div className="terminal-body" ref={terminalRef}>
        {lines.map((line, index) => (
          <div key={index} className={getLineClass(line.type)}>
            {getLineContent(line)}
          </div>
        ))}
      </div>
    </TerminalSection>
  )
}

const TerminalSection = styled.div`
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.borderSubtle};
  border-radius: 4px;
  overflow: hidden;
  max-width: 1000px;
  margin: 4rem auto;

  .terminal-header {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    background: ${theme.colors.bgSecondary};
    border-bottom: 1px solid ${theme.colors.borderSubtle};
    gap: 0.5rem;
  }

  .terminal-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .terminal-dot.red { background: #ff5f56; }
  .terminal-dot.yellow { background: #ffbd2e; }
  .terminal-dot.green { background: #27c93f; }

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
    background: ${theme.colors.bgDeep};
    min-height: 200px;
  }

  .terminal-line {
    display: flex;
    gap: 1rem;
    opacity: 0;
    transform: translateX(-20px);
    transition: all 0.4s ease;
  }

  .terminal-line.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .terminal-prompt {
    color: ${theme.colors.accentCyan};
  }

  .terminal-cmd {
    color: ${theme.colors.textPrimary};
  }

  .terminal-output {
    color: ${theme.colors.textSecondary};
  }

  .terminal-comment {
    color: ${theme.colors.textMuted};
  }

  .terminal-success {
    color: ${theme.colors.accentGreen};
  }

  .terminal-warning {
    color: ${theme.colors.accentOrange};
  }
`
