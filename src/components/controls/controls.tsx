import {
  AppBar,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
  type SelectChangeEvent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { TbCards } from "react-icons/tb";
import { TbPlayCardOff } from "react-icons/tb";
import {
  Actual,
  BoxTexts,
  ControlsContainer,
  FormControlButtons,
  FormControlInput,
  HomeButton,
  Percentage,
  ProgressBarLinear,
  RightBox,
  Texts,
  Total,
} from "./controls.styles";
import { useCountriesStore } from "../../stores/useCountriesStore";
import { useNavigate } from "react-router";
import type { ControlsProps } from "./controls.types";
import { cocaColaObject, fifaObject } from "./controls.utils";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { sortTeamsAlphabetically } from "../../utils/sort";

type Props = {
  children: React.ReactElement;
  direction?: "up" | "down";
};

export const HideOnScroll = ({ children, direction = "down" }: Props) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={direction} in={!trigger}>
      {children}
    </Slide>
  );
};

export const Controls = ({ countryCode, type }: ControlsProps) => {
  const countries = useCountriesStore((e) => e.countries);
  const navigate = useNavigate();
  const selectedCountry = useCountriesStore((e) => e.selectedCountry);
  const setCountry = useCountriesStore((e) => e.selectCountry);
  const collection = useCountriesStore((e) => e.collection);
  const setFilterMissing = useCountriesStore((e) => e.setFilterMissing);
  const filterMissing = useCountriesStore((e) => e.filterMissing);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const getStickerIds = () => {
    if (type === "TEAM" && countryCode) {
      return Array.from(
        { length: 20 },
        (_, i) => `TEAM_${countryCode}_${i + 1}`,
      );
    }

    if (type === "FWC") {
      return ["FWC_0", ...Array.from({ length: 19 }, (_, i) => `FWC_${i + 1}`)];
    }

    if (type === "CC") {
      return Array.from({ length: 14 }, (_, i) => `CC_${i + 1}`);
    }

    return [];
  };

  const ids = getStickerIds();
  const present = ids.filter((id) => (collection[id] || 0) > 0).length;
  const percentage = Math.round((present / ids.length) * 100);

  const handleSelectChange = (e: SelectChangeEvent) => {
    const value = e.target.value;

    if (value === "CC") {
      setCountry(cocaColaObject);
      navigate(`/album/especial/CC`);
    } else if (value === "FWC") {
      setCountry(fifaObject);
      navigate(`/album/${value}`);
    } else {
      const filterSelectedCountry = countries.filter(
        (c) => c.code === value,
      )[0];
      setCountry(filterSelectedCountry);
      navigate(`/album/equipe/${value}`);
    }
  };

  const handleNext = () => {
    if (selectedCountry.id + 1 <= 48) {
      const next = selectedCountry.id + 1;
      const filterSelectedCountry = countries.filter((c) => c.id === next)[0];
      setCountry(filterSelectedCountry);
      navigate(`/album/equipe/${filterSelectedCountry.code}`);
    } else {
      setCountry(cocaColaObject);
      navigate(`/album/especial/CC`);
    }
  };

  const handlePrev = () => {
    if (selectedCountry.id - 1 >= 1) {
      const prev = selectedCountry.id - 1;
      const filterSelectedCountry = countries.filter((c) => c.id === prev)[0];
      setCountry(filterSelectedCountry);
      navigate(`/album/equipe/${filterSelectedCountry.code}`);
    } else {
      setCountry(fifaObject);
      navigate(`/album/FWC`);
    }
  };

  const sortedCountries = sortTeamsAlphabetically(countries);

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed">
          <ControlsContainer>
            <Tooltip title="Ir para início" arrow>
              <HomeButton onClick={() => navigate("/")}>
                <HomeIcon />
              </HomeButton>
            </Tooltip>

            <FormControlInput>
              <InputLabel id="team-select-label">Seleção</InputLabel>
              <Select
                labelId="team-select-label"
                id="team-select"
                label="Seleção"
                value={selectedCountry?.code}
                onChange={handleSelectChange}
                sx={{
                  width: "100%",
                }}
              >
                <MenuItem value="FWC">Fifa World Cup</MenuItem>
                {sortedCountries.map((c) => (
                  <MenuItem key={c.code} value={c.code}>
                    {c.name}
                  </MenuItem>
                ))}
                <MenuItem value="CC">Coca-Cola</MenuItem>
              </Select>
            </FormControlInput>

            {!isMobile && (
              <BoxTexts>
                <Texts>
                  <Actual>{present} /</Actual>
                  <Total>{ids.length}</Total>
                </Texts>
                <Percentage>
                  {percentage}% <span>Concluído</span>
                </Percentage>
              </BoxTexts>
            )}

            <FormControlButtons>
              <Tooltip title="Voltar à página anterior" arrow>
                <IconButton
                  color="primary"
                  onClick={handlePrev}
                  disabled={selectedCountry.id == 0}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Ir para próxima página" arrow>
                <IconButton
                  color="primary"
                  onClick={handleNext}
                  disabled={selectedCountry.id == 49}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </Tooltip>
            </FormControlButtons>

            <ProgressBarLinear
              variant="determinate"
              value={percentage}
              aria-label="Export data"
              $progressBackground={selectedCountry.colors.tertiary || "#ccc"}
              $progressColor={selectedCountry.colors.primary}
            />
          </ControlsContainer>
        </AppBar>
      </HideOnScroll>
      {isMobile && (
        <HideOnScroll direction="up">
          <BoxTexts>
            <IconButton
              color={filterMissing ? "primary" : "error"}
              onClick={setFilterMissing}
            >
              {filterMissing ? (
                <TbCards size={34} />
              ) : (
                <TbPlayCardOff size={34} />
              )}
            </IconButton>
            <RightBox>
              <Texts>
                <Actual>{present} /</Actual>
                <Total>{ids.length}</Total>
              </Texts>

              <Percentage>
                {percentage}% <span>Concluído</span>
              </Percentage>
            </RightBox>
          </BoxTexts>
        </HideOnScroll>
      )}
    </>
  );
};
