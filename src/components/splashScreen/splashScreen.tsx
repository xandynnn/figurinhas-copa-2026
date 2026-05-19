import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import logo from "../../assets/logo-copa-iguaba-tem.png";

export const SplashScreen = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "fixed",
        inset: 0,
        background:
          "radial-gradient(circle at center, #d9ff57 0%, #5ba400 45%, #145a00 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Logo */}
      <motion.img
        src={logo}
        alt="IguabaTem Album"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        style={{
          width: 180,
          zIndex: 2,
          marginBottom: 24,
        }}
      />

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.7,
          duration: 0.8,
        }}
      >
        <Typography
          sx={{
            mt: 1,
            color: "#fff",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: 1,
            textTransform: "uppercase",
            textShadow: "0 2px 8px rgba(0,0,0,0.35)",
          }}
        >
          Álbum Virtual da Copa
        </Typography>
      </motion.div>

      {/* Loading */}
      <motion.div
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <Box
          sx={{
            mt: 5,
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: "4px solid rgba(255,255,255,0.25)",
            borderTop: "4px solid #fff",
            animation: "spin 1s linear infinite",
            "@keyframes spin": {
              from: {
                transform: "rotate(0deg)",
              },
              to: {
                transform: "rotate(360deg)",
              },
            },
          }}
        />
      </motion.div>
    </Box>
  );
};
