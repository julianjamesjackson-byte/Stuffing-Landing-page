
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets: Record<string, [number, number]> = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

// State abbreviations mapping for standard 50 states
const stateAbbreviations: Record<string, string> = {
  "Alabama": "AL", "Alaska": "AK", "Arizona": "AZ", "Arkansas": "AR", "California": "CA",
  "Colorado": "CO", "Connecticut": "CT", "Delaware": "DE", "Florida": "FL", "Georgia": "GA",
  "Hawaii": "HI", "Idaho": "ID", "Illinois": "IL", "Indiana": "IN", "Iowa": "IA",
  "Kansas": "KS", "Kentucky": "KY", "Louisiana": "LA", "Maine": "ME", "Maryland": "MD",
  "Massachusetts": "MA", "Michigan": "MI", "Minnesota": "MN", "Mississippi": "MS", "Missouri": "MO",
  "Montana": "MT", "Nebraska": "NE", "Nevada": "NV", "New Hampshire": "NH", "New Jersey": "NJ",
  "New Mexico": "NM", "New York": "NY", "North Carolina": "NC", "North Dakota": "ND", "Ohio": "OH",
  "Oklahoma": "OK", "Oregon": "OR", "Pennsylvania": "PA", "Rhode Island": "RI", "South Carolina": "SC",
  "South Dakota": "SD", "Tennessee": "TN", "Texas": "TX", "Utah": "UT", "Vermont": "VT",
  "Virginia": "VA", "Washington": "WA", "West Virginia": "WV", "Wisconsin": "WI", "Wyoming": "WY"
};

const USMapGraphic = () => {
  return (
    <div className="relative h-full w-full">
      {/* Premium Background Glows */}
      <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#007C74]/20 opacity-60 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[600px] rounded-full bg-amber-400/10 opacity-70 blur-[120px] pointer-events-none"></div>

      
      <ComposableMap projection="geoAlbersUsa" className="h-full w-full">
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  stroke="#00A99D"
                  geography={geo}
                  fill="#D2E7E6"
                  strokeWidth={0.75}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#B5D9D7", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))}
              {geographies.map(geo => {
                const centroid = geoCentroid(geo);
                const cur = stateAbbreviations[geo.properties.name];
                
                if (!cur) return null;
                
                return (
                  <g key={geo.rsmKey + "-name"}>
                    {cur &&
                      centroid[0] > -160 &&
                      centroid[0] < -67 &&
                      (Object.keys(offsets).indexOf(cur) === -1 ? (
                        <Marker coordinates={centroid}>
                          <text y="2" fontSize={10} textAnchor="middle" fill="#00354B" className="font-sans font-bold">
                            {cur}
                          </text>
                        </Marker>
                      ) : (
                        <Annotation
                          subject={centroid}
                          dx={offsets[cur][0]}
                          dy={offsets[cur][1]}
                          connectorProps={{
                            stroke: "#00A99D",
                            strokeWidth: 1,
                            strokeLinecap: "round"
                          }}
                        >
                          <text x="4" fontSize={10} alignmentBaseline="middle" fill="#00354B" className="font-sans font-bold">
                            {cur}
                          </text>
                        </Annotation>
                      ))}
                  </g>
                );
              })}
            </>
          )}
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default USMapGraphic;
