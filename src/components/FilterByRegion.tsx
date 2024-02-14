import { ChevronDown, ChevronUp } from "lucide-react";
import "../scss/components/FilterByRegion.scss";
import { useState } from "react";

type ChangeRegionType = {
  changeRegion: (region: string) => void;
};

const FilterByRegion = ({ changeRegion }: ChangeRegionType) => {
  const [open, setOpen] = useState(false);
  const [currentRegion, setCurrentRegion] = useState("");

  return (
    <div className="filterButton">
      <p className="currentRegion" onClick={() => setOpen(!open)}>
        {currentRegion == "" ? "Filter By Region" : currentRegion}
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </p>
      <div className={`regions ${open ? "open" : ""}`}>
        {currentRegion != "Africa" && (
          <button
            value={"Africa"}
            onClick={(e) => {
              setOpen(false);
              setCurrentRegion(e.currentTarget.value);
              changeRegion(e.currentTarget.value);
            }}
          >
            Africa
          </button>
        )}
        {currentRegion != "America" && (
          <button
            value={"America"}
            onClick={(e) => {
              setOpen(false);
              setCurrentRegion(e.currentTarget.value);
              changeRegion(e.currentTarget.value);
            }}
          >
            America
          </button>
        )}
        {currentRegion != "Asia" && (
          <button
            value={"Asia"}
            onClick={(e) => {
              setOpen(false);
              setCurrentRegion(e.currentTarget.value);
              changeRegion(e.currentTarget.value);
            }}
          >
            Asia
          </button>
        )}
        {currentRegion != "Europe" && (
          <button
            value={"Europe"}
            onClick={(e) => {
              setOpen(false);
              setCurrentRegion(e.currentTarget.value);
              changeRegion(e.currentTarget.value);
            }}
          >
            Europe
          </button>
        )}

        {currentRegion != "Oceania" && (
          <button
            value={"Oceania"}
            onClick={(e) => {
              setOpen(false);
              setCurrentRegion(e.currentTarget.value);
              changeRegion(e.currentTarget.value);
            }}
          >
            Oceania
          </button>
        )}

        {currentRegion != "" && (
          <button
            onClick={() => {
              setCurrentRegion("");
              setOpen(false);
              changeRegion("");
            }}
          >
            All Regions
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterByRegion;
