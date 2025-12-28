import React from "react";
import { Paper, Box, Typography } from "@mui/material";
export default function GlassCard({
  children,
  title,
  icon: Icon,
  sx = {}
}) {
  return <Paper elevation={0} sx={{
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
    backdropFilter: "blur(20px) saturate(120%)",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: `
          inset 0 1px 2px rgba(255, 255, 255, 0.3), 
          inset 0 -1px 2px rgba(0, 0, 0, 0.05),    
          0 8px 32px rgba(0, 0, 0, 0.15)            
        `,
    padding: 2.5,
    color: "white",
    mb: 2,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: `
            inset 0 1px 2px rgba(255, 255, 255, 0.4),
            inset 0 -1px 2px rgba(0, 0, 0, 0.05),
            0 12px 40px rgba(0, 0, 0, 0.25)
          `
    },
    ...sx
  }}>
      {(title || Icon) && <Box display="flex" alignItems="center" mb={2} sx={{
      opacity: 0.7
    }}>
          {Icon && <Icon size={15} style={{
        marginRight: 8
      }} />}
          <Typography variant="caption" sx={{
        textTransform: "uppercase",
        fontWeight: 700,
        letterSpacing: 1.2
      }}>
            {title}
          </Typography>
        </Box>}
      {children}
    </Paper>;
}