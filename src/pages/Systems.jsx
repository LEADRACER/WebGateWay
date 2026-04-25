const MetricCard = styled.div`
  text-align: center;
  padding: 1.5rem; /* Reduced from 2rem */
  background: ${theme.colors.grey800}; /* Using darker background */
  border: 1px solid ${theme.colors.borderSubtle};
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${theme.colors.accentBlue};
    transform: translateY(-4px);
  }
`