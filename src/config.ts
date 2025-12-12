import type { MapType } from "./interfaces";

// Enter your credentials here
export const CLIENT_ID = "YOUR_CLIENT_ID";
export const CLIENT_SECRET = "YOUR_CLIENT_SECRET";
// Valid options: "map" | "map-set"
export const CURRENT_MAP_TYPE: MapType = "YOUR_MAP_TYPE";
// The map or map-set code to load
export const CODE = "YOUR_MAP_CODE";

// API endpoints (do not modify)
export const SDK_AUTH_URL = "https://api.multiset.ai/v1/m2m/token";
export const QUERY_URL = "https://api.multiset.ai/v1/vps/map/query-form";
export const MAP_DETAILS_URL = "https://api.multiset.ai/v1/vps/map/";
export const FILE_DOWNLOAD_URL = "https://api.multiset.ai/v1/file";