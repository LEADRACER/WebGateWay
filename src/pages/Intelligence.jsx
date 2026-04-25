function getSeverityColor(severity) {
  switch (severity) {
    case 'critical': return theme.colors.accentOrange // Already using darker orange
    case 'high': return theme.colors.accentOrange
    case 'medium': return theme.colors.accentBlue // Already using darker blue
    case 'low': return theme.colors.accentGreen // Already using darker green
    default: return theme.colors.textMuted
  }
}