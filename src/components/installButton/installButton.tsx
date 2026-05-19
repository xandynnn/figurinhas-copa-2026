import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { usePWAInstall } from "../../hooks/usePWAInstall";

export const InstallButton = () => {
  const { install, isInstallable } = usePWAInstall();

  if (!isInstallable) return null;

  return (
    <Button
      fullWidth
      variant="contained"
      startIcon={<DownloadIcon />}
      onClick={install}
      sx={{
        mt: 2,
        py: 1.6,
        borderRadius: "16px",
        fontWeight: 700,
        fontSize: "1rem",
      }}
    >
      Instalar Aplicativo
    </Button>
  );
};
